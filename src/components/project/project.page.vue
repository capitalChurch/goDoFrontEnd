<template>
    <FixedElements color="purple" class="project">
        <div class="cover">
            <img :src="urlImage(project.coverImage)" :alt="`Cover ${project.title}`">
        </div>
        <div class="infoContainer">
            <div :class="['title', project.colorTitle]">{{project.title}}</div>
            <div class="texts">
                <div class="text">{{project.text}}</div>
                <div class="subtitle" v-if="!!project.getInvolved">Como se envolver</div>
                <div class="text" v-if="!!project.getInvolved">{{project.getInvolved}}</div>
                <div class="subtitle" v-if="!!project.support">Como contribuir</div>
                <div class="text" v-if="!!project.support">{{project.support}}</div>
            </div>
            <div class="image">
                <img :src="urlImage(project.projectImage)" :alt="`Project ${project.title}`">
            </div>
        </div>
    </FixedElements>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import FixedElements from '@/components/common/fixed-elements.component.vue';
    import {project} from "@/model/projects/type";
    import {allProjects} from "@/model/projects/allProjects";

    @Component({
        name: "ProjectPage",
        components: {FixedElements}
    })
    export default class ProjectPage extends Vue {
        public get project(): project{
            return allProjects.find(x => x.key === this.$route.params.key) || allProjects[0];
        }

        public urlImage(str: string): string{
            return require(`../../assets/images/${str}.png`)
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .project{
        .cover img {
            height: 445px !important;
            max-height: 445px !important;
            min-height: 445px !important;
            width: 100%;
            min-width: 100%;
        }

        .infoContainer{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: $paddingMenu*2 $paddingLeft;
            text-align: left;

            .title{
                $fontSize: $h0FontSize;
                width: 100%;

                font-size: $fontSize;
                line-height: $fontSize;
                font-weight: 600;

                &.green{
                    color: $greenColor;
                }

                &.red{
                    color: $primaryColor;
                }

                &.yellow{
                    color: $yellowColor;
                }

                &.purple{
                    color: $purpleColor;
                }

                &.blue{
                    color: $blueColor;
                }
            }

            .texts{
                max-width: 30vw;
                color: $darkPurpleColor;

                .text{
                    font-weight: 200;
                    padding-bottom: $paddingMenu;
                    &:first-child{
                        padding: $paddingMenu 0;
                    }
                }

                .subtitle{
                    $fontSize: $h2FontSize;
                    font-weight: 700;
                    padding-bottom: 8px;

                    font-size: $fontSize;
                    line-height: $fontSize;
                }
            }

            .image{
                img{
                    width: calc(300px + 10vw);
                }
            }
        }

    }
</style>
