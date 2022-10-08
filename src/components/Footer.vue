<template>
    <div id="footer">
        <div class="footer-textbox" id="phone">
            <span>Tel. szám: <a href="tel:06307FOREST">06 30 7 FOREST</a></span>
        </div>
        <div class="footer-textbox" id="copyright">
            <span>Copyright © Forest Garden 2022</span>
        </div>
        <div class="footer-textbox" id="email">
            <span>E-mail: <a href="mailto:forest@garden.hu">forest@garden.hu</a></span>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
    #footer {
        flex: 1 0 20vh;
        background-color: $secondary-bg-color;
        display: flex;
        align-items: stretch;
        box-sizing: border-box;
        padding: 0.5rem;
        padding-top: 2rem;
        font-size: 1.1rem;

        .footer-textbox {
            flex: 1 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            &,
            & a {
                color: $secondary-font-color;
            }
        }

        #copyright {
            justify-content: end;
        }
    }
</style>
