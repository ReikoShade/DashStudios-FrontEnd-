<template>
    <footer class="footer">
        <div class="footer__wrapper">
            <div class="footer__content">
                <div class="footer__block">
                    <h4 class="headline headline_small footer__block-headline">
                        Dash Studios
                    </h4>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <router-link to="/games" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Игры
                                </p>
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/company" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Компания
                                </p>
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/teams" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Команда
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__block">
                    <h4 class="headline headline_small footer__block-headline">
                        Контакты
                    </h4>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <router-link to="/games" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Помощь
                                </p>
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/company" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Сотрудничество
                                </p>
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/teams" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Работа в Dash
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__block">
                    <h4 class="headline headline_small footer__block-headline">
                        Соц сети
                    </h4>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <router-link to="/games" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    VK
                                </p>
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/company" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Telegram
                                </p>
                            </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/teams" class="link"> 
                                <p class="link__text headline headline_extra-small">
                                    Discord
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__copyright">
                <p class="text text_small footer__copyright-text">
                    ©2010 - 2023 Dash Studios
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default{
        name: 'FooterBlock',
    }
</script>

<style scoped>
    .footer__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5em;
        padding-top: 12.5rem;
        padding-bottom: 6.25rem;
        box-sizing: border-box;
    }

    .footer__content{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 40px;
        width: 80%;
        max-width: 900px;
    }

    .footer__block{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        width: max-content;
    }

    .footer__list{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
        margin: 0;
        padding: 0;
    }

    .footer__item{
        list-style: none;
    }

    .footer__block-headline{
        color: var(--Gray);
    }

    .footer__copyright-text{
        color: var(--Gray);
        opacity: 0.4;
    }
</style>