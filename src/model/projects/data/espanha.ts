import {menuProject, project, typeProject} from '@/model/projects/type';

const menuEspanha: menuProject = {
    shape: 'shapeR2', //tem que ter o arquivo na pasta, assets/shapes/purple1.png
    textAlignment: 'right',
    width: 90 //defini a quebra de linha dentro do shape, no menu,
};

//Tem que adicionar essa constant dentro do arquivo: model/projects/allProjects.ts

export const espanha: project = {
    key: 'espanha', // a key é utilizada na rota(endereço url), não pode ter acentos
    title: 'Espanha',
    menu: menuEspanha,
    type: typeProject.international,
    coverImage: 'coverEspanha', //tem que ter o arquivo na pasta, assets/images/coverGuine.png
    projectImage: 'projectEspanha', //tem que ter o arquivo na pasta, assets/images/projectGuine.png
    text: 'O projeto consiste na atuação para o fortalecimento da plantação e efetivação de uma igreja em Huelva, visando a independência da mesma. Nosso objetivo é que a igreja seja capaz de se sustentar, se promover e crescer teologicamente, levando o nome de Jesus para todos os cantos do país.',
    getInvolved: 'É possível se envolver com o projeto por meio do apoio na formação de líderes e nas áreas de auxílio ao projeto, por meio da intercessão, som, iluminação, ensino e disposição para servir em tudo que for preciso.',
    support: 'A contribuição com o projeto acontece por meio de ofertas para investimento na formação bíblica avançada de líderes vocacionados que não têm condições financeiras, para o sustento de famílias missionárias e para o treinamento de professores e pessoas envolvidas com som, iluminação e projeção.'
};
