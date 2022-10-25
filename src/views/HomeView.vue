<script setup lang="ts"></script>

<template>
    <div id="content">
        <div class="block">
            <img src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam possimus perspiciatis illum. Suscipit totam alias, est magnam fugit praesentium provident ullam rerum molestiae, doloremque, quis atque perspiciatis. Ipsum consequuntur pariatur quaerat velit, eaque vero voluptates, facere maiores magni quas dolores a nemo minus est magnam expedita illo amet soluta atque cum natus incidunt delectus eos. Labore quibusdam, est corrupti corporis amet rem soluta quo dolore! Eos ad deleniti nostrum eligendi et! Perspiciatis eos ipsum commodi reprehenderit. Unde quas commodi sapiente ab similique, distinctio eveniet? Repudiandae ex illum accusantium, voluptate consectetur illo corporis omnis, aliquid reprehenderit mollitia aliquam. Sit nemo dolore eum ducimus voluptatibus, repellendus doloremque</p>
        </div>
        <div class="block">
            <img class="even" src="https://images.pexels.com/photos/4505171/pexels-photo-4505171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam possimus perspiciatis illum. Suscipit totam alias, est magnam fugit praesentium provident ullam rerum molestiae, doloremque, quis atque perspiciatis. Ipsum consequuntur pariatur quaerat velit, eaque vero voluptates, facere maiores magni quas dolores a nemo minus est magnam expedita illo amet soluta atque cum natus incidunt delectus eos. Labore quibusdam, est corrupti corporis amet rem soluta quo dolore! Eos ad deleniti nostrum eligendi et! Perspiciatis eos ipsum commodi reprehenderit. Unde quas commodi sapiente ab similique, distinctio eveniet? Repudiandae ex illum accusantium, voluptate consectetur illo corporis omnis, aliquid reprehenderit mollitia aliquam. Sit nemo dolore eum ducimus voluptatibus, repellendus doloremque</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    #content {
        width: 80%;
        margin: 40px auto;

        img {
            max-width: 500px;
            margin: 20px;
            float: right;
            border-radius: 10px;
        }
        img.even {
            float: left;
        }

        p {
            text-align: justify;
            margin-bottom: 40px;
            font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 900px) {
        .block {
            display: flex !important;
            flex-direction: column;
            align-items: center;
        }

        img {
            float: initial !important;
            flex-shrink: 0;
            flex-grow: 0;
        }
    }

</style>