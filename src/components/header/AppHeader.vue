<template>
    <div class="header">
        <div class="header__search">
            <router-link to="/"><img src="../../assets/logo/logo.jpg" alt="logo" /></router-link>
            <div class="search-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search icon"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input class="header__input" type="text" placeholder="search" />
            </div>
        </div>
        <div class="header__controller">
            <div class="controller">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16.4184 6.47H16.6232C19.3152 6.47 21.5 8.72 21.5 11.48V17C21.5 19.76 19.3152 22 16.6232 22H7.3768C4.6848 22 2.5 19.76 2.5 17V11.48C2.5 8.72 4.6848 6.47 7.3768 6.47H7.58162C7.60113 5.27 8.05955 4.15 8.8886 3.31C9.72741 2.46 10.8003 2.03 12.0098 2C14.4286 2 16.3891 4 16.4184 6.47ZM9.91273 4.38C9.36653 4.94 9.06417 5.68 9.04466 6.47H14.9553C14.9261 4.83 13.6191 3.5 12.0098 3.5C11.2587 3.5 10.4784 3.81 9.91273 4.38ZM15.7064 10.32C16.116 10.32 16.4379 9.98 16.4379 9.57V8.41C16.4379 8 16.116 7.66 15.7064 7.66C15.3065 7.66 14.9748 8 14.9748 8.41V9.57C14.9748 9.98 15.3065 10.32 15.7064 10.32ZM8.93737 9.57C8.93737 9.98 8.6155 10.32 8.20585 10.32C7.80595 10.32 7.47433 9.98 7.47433 9.57V8.41C7.47433 8 7.80595 7.66 8.20585 7.66C8.6155 7.66 8.93737 8 8.93737 8.41V9.57Z"
                            fill="#4E4AF2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.85 2.50016C16.481 2.50016 17.111 2.58916 17.71 2.79016C21.401 3.99016 22.731 8.04016 21.62 11.5802C20.99 13.3892 19.96 15.0402 18.611 16.3892C16.68 18.2592 14.561 19.9192 12.28 21.3492L12.03 21.5002L11.77 21.3392C9.48102 19.9192 7.35002 18.2592 5.40102 16.3792C4.06102 15.0302 3.03002 13.3892 2.39002 11.5802C1.26002 8.04016 2.59002 3.99016 6.32102 2.76916C6.61102 2.66916 6.91002 2.59916 7.21002 2.56016H7.33002C7.61102 2.51916 7.89002 2.50016 8.17002 2.50016H8.28002C8.91002 2.51916 9.52002 2.62916 10.111 2.83016H10.17C10.21 2.84916 10.24 2.87016 10.26 2.88916C10.481 2.96016 10.69 3.04016 10.89 3.15016L11.27 3.32016C11.3618 3.36913 11.4649 3.44396 11.554 3.50863C11.6104 3.5496 11.6612 3.5865 11.7 3.61016C11.7163 3.61979 11.7329 3.62947 11.7496 3.63923C11.8354 3.68928 11.9247 3.74142 12 3.79916C13.111 2.95016 14.46 2.49016 15.85 2.50016ZM18.51 9.70016C18.92 9.68916 19.27 9.36016 19.3 8.93916V8.82016C19.33 7.41916 18.481 6.15016 17.19 5.66016C16.78 5.51916 16.33 5.74016 16.18 6.16016C16.04 6.58016 16.26 7.04016 16.68 7.18916C17.321 7.42916 17.75 8.06016 17.75 8.75916V8.79016C17.731 9.01916 17.8 9.24016 17.94 9.41016C18.08 9.58016 18.29 9.67916 18.51 9.70016Z"
                            fill="#4E4AF2" />
                    </svg>
                </div>
                <button class="button1">
                    <a href="/login">Sign In</a>
                </button>
                <button class="button2">Sign up</button>
            </div>
            <div class="user">
                <div class="info">
                    <strong>Name</strong>
                    <p>Description</p>
                </div>
                <div class="avatar">
                    <svg width="50" height="50" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icon">
                            <circle id="Ellipse" cx="18" cy="18" r="17.6087" fill="white" stroke="#D7D7D7"
                                stroke-width="0.782609" />
                            <path id="Profile" fill-rule="evenodd" clip-rule="evenodd"
                                d="M25.0433 15.6488C25.0433 19.5563 21.9103 22.6895 18 22.6895C14.091 22.6895 10.9567 19.5563 10.9567 15.6488C10.9567 11.7412 14.091 8.60938 18 8.60938C21.9103 8.60938 25.0433 11.7412 25.0433 15.6488ZM17.9999 35.2181C12.229 35.2181 7.35645 34.2801 7.35645 30.6613C7.35645 27.0412 12.2596 26.1365 17.9999 26.1365C23.7722 26.1365 28.6434 27.0744 28.6434 30.6932C28.6434 34.3134 23.7402 35.2181 17.9999 35.2181Z"
                                fill="#D7D7D7" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
  


<script>
export default {
    name: 'AppHeader'
}
</script>
  



  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./app-header.scss";
</style>