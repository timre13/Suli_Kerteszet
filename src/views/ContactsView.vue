<script setup lang="ts"></script>

<template>
    <div id="wrapper">
        <form>
            <div class="input-div small">
                <div class="inner-div">
                    <label for="name-input">Név:</label>
                    <input name="name-input" required />
                </div>
            </div>
            <div class="input-div small center">
                <div class="inner-div">
                    <label for="email-input">E-mail:</label>
                    <input name="email-input" type="email" required />
                </div>
            </div>
            <div class="input-div small right">
                <div class="inner-div">
                    <label for="phone-input">Telefonszám (opcionális):</label>
                    <input name="phone-input" type="tel" />
                </div>
            </div>
            <div class="input-div big">
                <label for="msg-input">Üzenet:</label>
                <textarea name="msg-input" id="" cols="30" rows="10" required></textarea>
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

    input,
    textarea,
    button {
        border-radius: 5px;
        border: 1px solid gray;
        outline: none;
        padding: 4px;
    }

    input {
        max-width: 20rem;
        width: 80vw;
    }

    textarea {
        resize: none;
        width: 80vw;
    }

    button {
        background-color: #ebff00;
        color: black;
        padding: 4px 30px;
        font-size: larger;
    }

    .input-div,
    .inner-div {
        display: flex;
        flex-direction: column;
    }

    /* .right {
        align-items: flex-end;
    }

    .center {
        align-items: center;
    } */

    .small {
        flex: 1 0;
        align-items: center;
    }
    .big {
        flex: 3 0 100%;
    }

    .button {
        flex: 1 0;
        flex-direction: row;

        button {
            width: 15rem;
        }
        margin-bottom: 30px;
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
        margin-top: 15px;
    }

    @media only screen and (max-width: 805px) {
        .button {
            justify-content: center;
        }
    }
</style>
