import {menuProject, project, typeProject} from '@/model/projects/type';

const menuHaiti: menuProject = {
    shape: 'purple1',
	textAlignment: 'right',
	width: 100 
};

export const haiti: project = {
    key: 'haiti',
    colorTitle: 'red',
    title: 'Haiti',
    type: typeProject.international,
    menu: menuHaiti,
    coverImage: 'coverHaiti', 
    projectImage: 'projectHaiti', 
    text: 'O projeto no Haiti acontece por meio de uma casa de acolhimento que funciona em parceria com a PIB Flórida, nos Estados Unidos. A Vila de Esperança - nome da casa de acolhimento - está localizada nos arredores de Porto Príncipe e abriga cerca de 40 crianças, com idade entre três e 19 anos, em condições de vulnerabilidade social, familiar e/ou econômica. Aqui, sustentamos e viabilizamos o cuidado integral com essas crianças, incluindo alimentação, moradia, segurança, saúde e educação.',
    getInvolved: 'O envolvimento no projeto do Haiti pode ser feito por meio da oração, contribuição e auxílio na captação de recursos, buscando o avanço do nome de Jesus pelo país.',
    support: 'A contribuição com o projeto acontece por meio de ofertas e adoção de crianças que são cuidadas na Vila da Esperança. Para isso, é necessário que se comprometa a sustentá-las e a enviar presentes. Fazer isso é uma atitude de amor e compaixão para com os menos necessitados.'
};
