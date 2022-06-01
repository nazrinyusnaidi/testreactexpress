const db = require('./db');
const helper = require('../helper');
const config = require('../db.config');

async function selectAll(){
 const rows = await db.query(
    'SELECT * FROM programme'
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

async function createRow(programmeName){
    const result = await db.query(
      `INSERT INTO yearsemester(yearsem_id, yearsem_year, yearsem_sem, yearsem_type) VALUES (${programmeName.id},${programmeName.year},${programmeName.sem},"${programmeName.semType}")`
    );
  
    let message = 'Error in creating new programme of study';
  
    if (result.affectedRows) {
      message = 'New program of study created successfully';
    }
  
    return {message};
  }

  async function updateRow(id, programmingLanguage){
    const result = await db.query(
      `UPDATE programme 
      SET prog_name="${programmingLanguage.name}"
      WHERE prog_id=${id}` 
    );
  
    let message = 'Error in updating programming language';
  
    if (result.affectedRows) {
      message = 'Programme updated successfully';
    }
  
    return {message};
  }

module.exports = {
    selectAll,
    createRow,
    updateRow
}