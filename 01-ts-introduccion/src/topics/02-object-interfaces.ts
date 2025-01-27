const skills:string[] = ['typescript', 'javascript', 'react'];

interface Person {
    name: string;
    age: number;
    skills: string[];
    pais: string | undefined
}

const strider:Person = {
    name: 'Riosu',
    age: 30,
    skills: ['css', 'html'],
    pais: 'España'
}


strider.pais = 'Irlanda';

console.table(strider);

export{};