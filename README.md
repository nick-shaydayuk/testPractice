# Практика по тестам

Перед началом работы ознакомьтесь с мэйкфайлом и заданиями.
Все задания выполняются в index.js и экспортируются не по дефолту.

### Задание 

В этом задании ваша задача написать тесты к уже готовым функциям, которые находятся в файле __index.js__, при помощи библиотеки Jest. В первую очередь не забудьте установить зависимости в репозитории. 

### Stryker

Также обратите внимание, что появился файл __stryker.config.json__. Задача страйкера в том, чтобы проверить ваши тесты.
Запустить его можно командой __npx stryker run__
Как он это делает: 
    1. Проверяет покрытие кода тестами, все не обработанные случаи хранятся в столбике __no cov__
    2. Подменяет некоторые выражения в исходном тестируемом коде и наблюдает за поведением тестов.
    3. Если после внесения измений тесты ведут себя некорректно, то мутант (изменнённый код) считается выжившим, а тесты неполными.
Такой подход называется мутационным тестированием, более подробно [тут](https://habr.com/ru/articles/334394/)
С более подробной информацие о страйкере можно ознакомиться на сайте с официальной документацией [тут](https://stryker-mutator.io/docs/mutation-testing-elements/mutant-states-and-metrics/#metrics).
Статья про страйкер: [тут](https://habr.com/ru/articles/341094/)

## Оценка
Оценка будет строится не на количестве пройденных тестов, а на основе страйкера. Максимум, который можно получить от него - 100 процентов. Проценты увеличиваются в зависимости от покрытия кода и убитых мутантов.
40-60 процентов = 3
60-98 процентов = 4
98-100 = 5