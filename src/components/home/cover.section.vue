<template>
    <div class="coverSection">
        <ul class="cb-slideshow">
            <li><span>&nbsp;</span><div><h3>Seja a<br />resposta para<br /> as necessidades do mundo.</h3></div></li>
            <li><span>&nbsp;</span><div><h3>Seja a<br />resposta para<br /> as necessidades do mundo.</h3></div></li>
            <li><span>&nbsp;</span><div><h3>Seja a<br />resposta para<br /> as necessidades do mundo.</h3></div></li>
            <li><span>&nbsp;</span><div><h3>Seja a<br />resposta para<br /> as necessidades do mundo.</h3></div></li>
            <li><span>&nbsp;</span><div><h3>Seja a<br />resposta para<br /> as necessidades do mundo.</h3></div></li>
            <li><span>&nbsp;</span><div><h3>Seja a<br />resposta para<br /> as necessidades do mundo.</h3></div></li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component({
        name: "CoverSection",
        components: {}
    })
    export default class CoverSection extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import "../../theme";

    .coverSection{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100vh;
        padding-bottom: $appBarHeight;
        padding-left: calc((100vw - #{$maxWidthBody}) / 2);

        &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            max-width: 100vw;
            max-height: 100vh;
            height: 100%;
            width: 100%;
            background-image: url("../../assets/images/guine.png");
            background-size: cover;
            z-index: -1;
        }

        h1{
            font-size: $h0FontSize;
            line-height: $h0FontSize;
            margin: 0;
            color: white;
            max-width: 680px;
            text-align: left;
            z-index: 2;
        }
    }

    .cb-slideshow,
    .cb-slideshow:after {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: 0;
    }
    .cb-slideshow:after {
        content: '';
        background: transparent url("../../assets/images/pattern.png") repeat top left;
    }
    .cb-slideshow li span {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: none;
        opacity: 0;
        z-index: 0;
        -webkit-backface-visibility: hidden;
        -webkit-animation: imageAnimation 36s linear infinite 0s;
        -moz-animation: imageAnimation 36s linear infinite 0s;
        -o-animation: imageAnimation 36s linear infinite 0s;
        -ms-animation: imageAnimation 36s linear infinite 0s;
        animation: imageAnimation 36s linear infinite 0s;
    }
    .cb-slideshow li div {
        z-index: 1000;
        position: absolute;
        bottom: 30px;
        left: 0px;
        width: 100%;
        text-align: center;
        opacity: 0;
        -webkit-animation: titleAnimation 36s linear infinite 0s;
        -moz-animation: titleAnimation 36s linear infinite 0s;
        -o-animation: titleAnimation 36s linear infinite 0s;
        -ms-animation: titleAnimation 36s linear infinite 0s;
        animation: titleAnimation 36s linear infinite 0s;
    }
    .cb-slideshow li div h3 {
        padding: 0 70px;
        font-size: $h0FontSize;
        line-height: $h0FontSize;
        color: white;
        max-width: 60%;
        text-align: left;
        z-index: 2;
    }
    .cb-slideshow li:nth-child(1) span { background-image: url("../../assets/images/guine.png") }
    .cb-slideshow li:nth-child(2) span {
        background-image: url("../../assets/images/guine.png");
        -webkit-animation-delay: 6s;
        -moz-animation-delay: 6s;
        -o-animation-delay: 6s;
        -ms-animation-delay: 6s;
        animation-delay: 6s;
    }
    .cb-slideshow li:nth-child(3) span {
        background-image: url("../../assets/images/guine.png");
        -webkit-animation-delay: 12s;
        -moz-animation-delay: 12s;
        -o-animation-delay: 12s;
        -ms-animation-delay: 12s;
        animation-delay: 12s;
    }
    .cb-slideshow li:nth-child(4) span {
        background-image: url("../../assets/images/guine.png");
        -webkit-animation-delay: 18s;
        -moz-animation-delay: 18s;
        -o-animation-delay: 18s;
        -ms-animation-delay: 18s;
        animation-delay: 18s;
    }
    .cb-slideshow li:nth-child(5) span {
        background-image: url("../../assets/images/guine.png");
        -webkit-animation-delay: 24s;
        -moz-animation-delay: 24s;
        -o-animation-delay: 24s;
        -ms-animation-delay: 24s;
        animation-delay: 24s;
    }
    .cb-slideshow li:nth-child(6) span {
        background-image: url("../../assets/images/guine.png");
        -webkit-animation-delay: 30s;
        -moz-animation-delay: 30s;
        -o-animation-delay: 30s;
        -ms-animation-delay: 30s;
        animation-delay: 30s;
    }
    .cb-slideshow li:nth-child(2) div {
        -webkit-animation-delay: 6s;
        -moz-animation-delay: 6s;
        -o-animation-delay: 6s;
        -ms-animation-delay: 6s;
        animation-delay: 6s;
    }
    .cb-slideshow li:nth-child(3) div {
        -webkit-animation-delay: 12s;
        -moz-animation-delay: 12s;
        -o-animation-delay: 12s;
        -ms-animation-delay: 12s;
        animation-delay: 12s;
    }
    .cb-slideshow li:nth-child(4) div {
        -webkit-animation-delay: 18s;
        -moz-animation-delay: 18s;
        -o-animation-delay: 18s;
        -ms-animation-delay: 18s;
        animation-delay: 18s;
    }
    .cb-slideshow li:nth-child(5) div {
        -webkit-animation-delay: 24s;
        -moz-animation-delay: 24s;
        -o-animation-delay: 24s;
        -ms-animation-delay: 24s;
        animation-delay: 24s;
    }
    .cb-slideshow li:nth-child(6) div {
        -webkit-animation-delay: 30s;
        -moz-animation-delay: 30s;
        -o-animation-delay: 30s;
        -ms-animation-delay: 30s;
        animation-delay: 30s;
    }
    /* Animation for the slideshow images */
    @-webkit-keyframes imageAnimation { 
        0% {
            opacity: 0;
            -webkit-animation-timing-function: ease-in;
        }
        8% {
            opacity: 1;
            -webkit-transform: scale(1.05);
            -webkit-animation-timing-function: ease-out;
        }
        17% {
            opacity: 1;
            -webkit-transform: scale(1.1);
        }
        25% {
            opacity: 0;
            -webkit-transform: scale(1.1);
        }
        100% { opacity: 0 }
    }
    @-moz-keyframes imageAnimation { 
        0% {
            opacity: 0;
            -moz-animation-timing-function: ease-in;
        }
        8% {
            opacity: 1;
            -moz-transform: scale(1.05);
            -moz-animation-timing-function: ease-out;
        }
        17% {
            opacity: 1;
            -moz-transform: scale(1.1);
        }
        25% {
            opacity: 0;
            -moz-transform: scale(1.1);
        }
        100% { opacity: 0 }
    }
    @-o-keyframes imageAnimation { 
        0% {
            opacity: 0;
            -o-animation-timing-function: ease-in;
        }
        8% {
            opacity: 1;
            -o-transform: scale(1.05);
            -o-animation-timing-function: ease-out;
        }
        17% {
            opacity: 1;
            -o-transform: scale(1.1);
        }
        25% {
            opacity: 0;
            -o-transform: scale(1.1);
        }
        100% { opacity: 0 }
    }
    @-ms-keyframes imageAnimation { 
        0% {
            opacity: 0;
            -ms-animation-timing-function: ease-in;
        }
        8% {
            opacity: 1;
            -ms-transform: scale(1.05);
            -ms-animation-timing-function: ease-out;
        }
        17% {
            opacity: 1;
            -ms-transform: scale(1.1);
        }
        25% {
            opacity: 0;
            -ms-transform: scale(1.1);
        }
        100% { opacity: 0 }
    }
    @keyframes imageAnimation { 
        0% {
            opacity: 0;
            animation-timing-function: ease-in;
        }
        8% {
            opacity: 1;
            transform: scale(1.05);
            animation-timing-function: ease-out;
        }
        17% {
            opacity: 1;
            transform: scale(1.1);
        }
        25% {
            opacity: 0;
            transform: scale(1.1);
        }
        100% { opacity: 0 }
    }
    /* Animation for the title */
    @-webkit-keyframes titleAnimation { 
        0% {
            opacity: 0;
            -webkit-transform: translateY(200px);
        }
        8% {
            opacity: 1;
            -webkit-transform: translateY(0px);
        }
        17% {
            opacity: 1;
            -webkit-transform: scale(1);
        }
        19% { opacity: 0 }
        25% {
            opacity: 0;
            -webkit-transform: scale(10);
        }
        100% { opacity: 0 }
    }
    @-moz-keyframes titleAnimation { 
        0% {
            opacity: 0;
            -moz-transform: translateY(200px);
        }
        8% {
            opacity: 1;
            -moz-transform: translateY(0px);
        }
        17% {
            opacity: 1;
            -moz-transform: scale(1);
        }
        19% { opacity: 0 }
        25% {
            opacity: 0;
            -moz-transform: scale(10);
        }
        100% { opacity: 0 }
    }
    @-o-keyframes titleAnimation { 
        0% {
            opacity: 0;
            -o-transform: translateY(200px);
        }
        8% {
            opacity: 1;
            -o-transform: translateY(0px);
        }
        17% {
            opacity: 1;
            -o-transform: scale(1);
        }
        19% { opacity: 0 }
        25% {
            opacity: 0;
            -o-transform: scale(10);
        }
        100% { opacity: 0 }
    }
    @-ms-keyframes titleAnimation { 
        0% {
            opacity: 0;
            -ms-transform: translateY(200px);
        }
        8% {
            opacity: 1;
            -ms-transform: translateY(0px);
        }
        17% {
            opacity: 1;
            -ms-transform: scale(1);
        }
        19% { opacity: 0 }
        25% {
            opacity: 0;
            -webkit-transform: scale(10);
        }
        100% { opacity: 0 }
    }
    @keyframes titleAnimation { 
        0% {
            opacity: 0;
            transform: translateY(200px);
        }
        8% {
            opacity: 1;
            transform: translateY(0px);
        }
        17% {
            opacity: 1;
            transform: scale(1);
        }
        19% { opacity: 0 }
        25% {
            opacity: 0;
            transform: scale(10);
        }
        100% { opacity: 0 }
    }
    /* Show at least something when animations not supported */
    .no-cssanimations .cb-slideshow li span{
        opacity: 1;
    }
    @media screen and (max-width: 1140px) { 
        .cb-slideshow li div h3 { font-size: 100px }
    }
    @media screen and (max-width: 600px) { 
        .cb-slideshow li div h3 { font-size: 50px }
    }





</style>
