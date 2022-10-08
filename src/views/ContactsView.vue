<script setup lang="ts"></script>

<template>
    <div id="wrapper">
        <form action="" method="post">
                <div class="input-div small">
                    <div class="inner-div">
                        <label for="name-input">Név:</label>
                        <input name="name-input">
                    </div>
                </div>
                <div class="input-div small center">
                    <div class="inner-div">
                        <label for="email-input">E-mail:</label>
                        <input name="email-input" type="email">
                    </div>
                </div>
                <div class="input-div small right">
                    <div class="inner-div">
                        <label for="phone-input">Telefonszám (opcionális):</label>
                        <input name="phone-input" type="tel">
                    </div>
                </div>
            <div class="input-div big">
                <label for="msg-input">Üzenet:</label>
                <textarea name="msg-input" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="input-div button"><button type="submit">Küldés</button></div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    #top-div {
        display: flex;
        flex-grow: 3;
    }

    input, textarea, button {
        border-radius: 5px;
        border: 1px solid gray;
        outline: none;
        padding: 4px;
    }

    input {
        width: 20em;
    }

    textarea {
        resize: none;
    }

    button {
        background-color: #EBFF00;
        color: black;
        padding: 4px 30px;
        font-size: larger;
    }

    .input-div, .inner-div {
        display: flex;
        flex-direction: column;
    }

    .right {
        align-items: flex-end;
    }

    .center {
        align-items: center;
    }

    .small {
        flex: 1 0;

    }
    .big {
        flex: 3 0 100%;
    }

    .button {
        flex: 1 0;
        
        button {
            width: 20%;
        }
    }

    form {
        max-width: 80%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    #wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>