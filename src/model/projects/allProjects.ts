import {project} from '@/model/projects/type';
import {missionecas} from '@/model/projects/data/missionecas';
import {haiti} from '@/model/projects/data/haiti';
import {guine} from '@/model/projects/data/guine';

export const allProjects: project[] = [
    missionecas,
    haiti,
    guine
];
