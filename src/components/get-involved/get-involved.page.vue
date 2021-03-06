<template>
    <FixedElements color="purple" class="getInvolvedContainer">
        <div class="getInvolved">
            <div class="title">envolva-se</div>
            <div class="project" v-for="(projects, i) in lstProjects" :key="i">
                <div class="subtitle">{{projects.title}}
                    <LazyLoadImage :alt="projects.title" :src="getUrlImage(projects.imageUrl)" v-if="!!projects.imageUrl" />
                </div>
                <div class="projects">
                    <ShapeText
                            v-for="proj in projects.data"
                            :key="proj.key"
                            :text="proj.title"
                            :width="proj.menu.width"
                            :text-alignment="proj.menu.textAlignment"
                            @click="openProject(proj)">
                        <LazyLoadImage alt="Shape" :src="getUrlShape(proj)" />
                    </ShapeText>
                </div>
            </div>
        </div>
    </FixedElements>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import FixedElements from "@/components/common/fixed-elements.component.vue";
    import ShapeText from "@/components/get-involved/shape-text.component.vue";
    import {project, typeProject} from "@/model/projects/type";
    import {allProjects} from "@/model/projects/allProjects";
    import {changeRoute} from "@/main";
    import {routeEnum} from '@/model/types';
    import LazyLoadImage from '@/components/common/utils/lazy-load-image.component.vue';

    interface projects{
        data: project[];
        title: string;
        imageUrl?: string;
    }
    @Component({
        name: 'GetInvolvedPage',
        components: {LazyLoadImage, ShapeText, FixedElements}
    })
    export default class GetInvolvedPage extends Vue{
        public lstProjects: projects[] = [
            {
                title: 'projetos nacionais',
                data: allProjects.filter(x => x.type === typeProject.national),
                imageUrl: 'flagBrasil'
            },
            {
                title: 'projetos internacionais',
                data: allProjects.filter(x => x.type === typeProject.international),
            }
        ];

        public getUrlShape(proj: project){
            return `static/shapes/${proj.menu.shape}.png`;
        }

        public getUrlImage(imageName: string){
            return `static/images/${imageName}.png`;
        }

        public openProject(proj: project){
            changeRoute(routeEnum.Project, proj.key);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .getInvolvedContainer{
        padding-top: $marginTop;

        .getInvolved{
            padding: $paddingMenu $paddingLeft;
            text-align: left;

            .title{
                $fontSize: $h1FontSize;

                color: $purpleColor;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 700;
            }

            .subtitle{
                $fontSize: $h6FontSize;

                color: $purpleColor;
                text-transform: uppercase;
                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 600;
                letter-spacing: 1.5px;

                vertical-align: middle;
                img{
                    padding-left: 8px;
                    height: $fontSize * 1.4;
                }
            }

            .projects{
                padding: $paddingMenu*2 0;
            }
        }
    }
</style>
