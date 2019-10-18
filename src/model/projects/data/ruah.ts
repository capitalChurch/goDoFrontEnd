import {menuProject, project, typeProject} from '@/model/projects/type';

const menuRuah: menuProject = {
    shape: 'shapeP1', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
	textAlignment: 'right',
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const ruah: project = {
    key: 'ruah', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Ruah',
    type: typeProject.national,
    menu: menuRuah,
    coverImage: 'coverRuah', //tem que ter o arquivo na pasta, assets/images/coverHaiti.png
    projectImage: 'projectRuah', //tem que ter o arquivo na pasta, assets/images/projectHaiti.png,
    text: 'O Ruah é um projeto de ação evangelística que utiliza o espaço público para atender pessoas em situação de rua, em Brasília, por meio de abordagem pessoal, tentando construir relacionamento. Mais do que só oferecer alimento e água, nossas ações visam oferecer a oportunidade de transformação de vida através da internação voluntária, discipulado e ensino da Palavra. Entendemos que a maior necessidade do homem é Jesus Cristo, que liberta e transforma. Por isso, em parceria com a Cristolândia, trabalhamos na recuperação plena das pessoas, com abandono permanente do vício.',
    getInvolved: 'O Ruah conta com diversas formas de atuação. Todas com o objetivo de proclamar o nome de Jesus. É possível se envolver com louvor, evangelismo, produção do alimento distribuido, recepção e abordagem, acompanhamento dos alunos internados e intercessão. As ações são quinzenais, às sextas-feiras, começando às 22h. As atividades acontecem na rodoviária do Plano Piloto e no Instituto Hospital de Base.',
    support: 'É possível contribuir com o Ruah por meio do voluntariado e ofertas, utilizadas no custeio dos alimentos e atividades realizadas.'
};
