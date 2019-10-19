import {menuProject, project, typeProject} from '@/model/projects/type';

const menuGuine: menuProject = {
    shape: 'shapeY3', 
    textAlignment: 'right',
    width: 140 
};

export const guine: project = {
    key: 'guine-bissau',
    colorTitle: 'red',
    title: 'Guiné-Bissau',
    menu: menuGuine,
    type: typeProject.international,
    coverImage: 'coverGuine', 
    projectImage: 'projectGuine', 
    text: 'É um projeto que visa a transformação cultural, social e espiritual do país. O foco da iniciativa é influenciar e treinar líderes cistãos influentes da região, juntamente com sua igreja local, para que sejam resposta para as necessidades de Guiné-Bissau.',
    getInvolved: 'O envolvimento no projeto se dá por meio de preenchimento de formulário do Go&Do®, informando seu interesse e estando disposto a servir, dando seu máximo em favor de Guiné-Bissau e de Jesus.',
    support: 'A contribuição é feita por meio de oração constante pelo país e pelo projeto, por ofertas que ajudem no custeio das viagens ao país, pela participação nas viagens à Guiné-Bissau e, ainda, fazendo parte do time estratégico.'
};
