<template>
    <div class="flex">
        <div id="cards">
            <Card
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia provident explicabo in tempore aspernatur,
                    atque totam excepturi, esse quas voluptas quae, molestias eos sed nostrum!"
                title="Title"
                image="https://likebalaton.hu/wp-content/uploads/2022/04/9149474tulipanshutterstock1673844967-scaled-e1649149558645.jpg"
            />
            <Card title="Title" />
            <Card
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia provident explicabo in tempore aspernatur,
                    atque totam excepturi, esse quas voluptas quae, molestias eos sed nostrum!"
                title="Title"
            /><Card
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia provident explicabo in tempore aspernatur,
                    atque totam excepturi, esse quas voluptas quae, molestias eos sed nostrum!"
                title="Title"
            /><Card
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia provident explicabo in tempore aspernatur,
                    atque totam excepturi, esse quas voluptas quae, molestias eos sed nostrum!"
                title="Title"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
    import Card from "../components/Card.vue";
</script>
<style lang="scss" scoped>
    .flex {
        width: 100%;
        height: 100%;
    }
    #cards {
        flex: 1 0;
        height: 100%;
        box-sizing: border-box;
        padding: 2rem 5rem 2rem 5rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;
        // display: grid;
        // grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
        // grid-template-rows: repeat(auto-fit, 1fr);
        // grid-gap: 2rem;
        gap: 2rem;
    }
</style>
