import {menuProject, project, typeProject} from '@/model/projects/type';

const menuEspanha: menuProject = {
    shape: 'shapeR2', 
    textAlignment: 'right',
    width: 90 
};

export const espanha: project = {
    key: 'espanha',
    colorTitle: 'yellow',
    title: 'Espanha',
    menu: menuEspanha,
    type: typeProject.international,
    coverImage: 'coverEspanha', 
    projectImage: 'projectEspanha', 
    text: 'O projeto consiste na atuação para o fortalecimento da plantação e efetivação de uma igreja em Huelva, visando a independência da mesma. Nosso objetivo é que a igreja seja capaz de se sustentar, se promover e crescer teologicamente, levando o nome de Jesus para todos os cantos do país.',
    getInvolved: 'É possível se envolver com o projeto por meio do apoio na formação de líderes e nas áreas de auxílio ao projeto, por meio da intercessão, som, iluminação, ensino e disposição para servir em tudo que for preciso.',
    support: 'A contribuição com o projeto acontece por meio de ofertas para investimento na formação bíblica avançada de líderes vocacionados que não têm condições financeiras, para o sustento de famílias missionárias e para o treinamento de professores e pessoas envolvidas com som, iluminação e projeção.'
};
