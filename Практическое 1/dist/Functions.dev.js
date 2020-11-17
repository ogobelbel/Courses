"use strict";

function CheckAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Есть разрешение?');
  }
}

var age = prompt("Скока лет?", +"18");

if (CheckAge(age)) {
  alert("Доступ разрещен");
} else {
  alert("У вас нет доступа");
}

function d() {}