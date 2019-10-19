import {menuProject, project, typeProject} from '@/model/projects/type';

const menuCristolandia: menuProject = {
    shape: 'green', 
    textAlignment: 'left',
    width: 92 
};

export const cristolandia: project = {
    key: 'cristolandia',
    colorTitle: 'yellow',
    title: 'Cristolândia',
    type: typeProject.national,
    menu: menuCristolandia,
    coverImage: 'coverCristolandia', 
    projectImage: 'projectCristolandia', 
    text: 'Cristolândia é lugar de libertação e recuperação das drogas. Como oposição à cracolândia, atendemos pessoas de todas as idades, de crianças a adultos. O projeto representa mudança social e nova vida para os que são tratados.',
    getInvolved: 'O envolvimento na Cristolândia pode ser feito por meio do voluntariado nas áreas da educação, saúde, advocacia, nutrição, professores de esporte e dança. A ideia é ajudar as pessoas internadas a encontrarem novos hobbies e, claro, promover a ressoocialização.',
    support: 'A contribuição com o projeto acontece pelas ofertas e pela doação de alimentos, roupas, materiais de higiene, calçados e tudo que for útil para auxiliar as pessoas internadas.'
};
