<template lang="">
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="" class="logo" />
        </a>
        <div
          class="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              v-for="(items, index) in navItems"
              :key="index"
              class="nav-item dropdown"
            >
              <a
                class="nav-link"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ items.title }}
                <span>{{ items.span }}</span>
              </a>
              <ul class="dropdown-menu">
                <li v-for="(subtitle, index) in items.subtitle" :key="index">
                  <a class="dropdown-item" href="#">{{ subtitle }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-link login">註冊 / 登入</li>
          </ul>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { navItems } from '../contansts';
</script>
