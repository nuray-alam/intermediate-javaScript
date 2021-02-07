const students = [
    { id: 21, name: 'Anis' }, { id: 32, name: 'Rahim' }, { id: 43, name: 'Fonis' }, { id: 52, name: 'Rois' }
];
const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const biggerStudents = students.filter(s => s.id > 40);
console.log(biggerStudents);

const firstBiggerStudent = students.find( s => s.id > 40);
console.log(firstBiggerStudent);