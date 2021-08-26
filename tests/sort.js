'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('Бббббб'), 'Бббббб');
		assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
		assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
	});

	QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
		assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
	});

	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
		assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('вбава'), 'Аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
		assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
		assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('в б а в а'), 'А А Б В В');
	});

	QUnit.test('Функция работает правильно', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
		assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
		assert.strictEqual(sort(''), '');
	});

	QUnit.test('Функция работает корректно с неправильным вводом', function (assert) {
		assert.strictEqual(sort(undefined), '');
		assert.strictEqual(sort(null), '');
		assert.strictEqual(sort(true), '');
		assert.strictEqual(sort(alert), '');
		assert.strictEqual(sort(10n), '');
	});

	QUnit.test('Функция работает со смешанным вводом', function (assert) {
		assert.strictEqual(sort('a а б b c в'), 'A B C А Б В', 'Работает с английским и русскими алфавитами');
		assert.strictEqual(sort('a  а  б  b  c  в'), 'A B C А Б В', 'Работает с лишними пробелами');
	});

	QUnit.test('Вспомогательная функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(capitalizeWord('Ааа'), 'Ааа');
		assert.strictEqual(capitalizeWord('АаА'), 'Ааа');
		assert.strictEqual(capitalizeWord('аБв'), 'Абв');
		assert.strictEqual(capitalizeWord('zzZz'), 'Zzzz',);
		assert.strictEqual(capitalizeWord('AbCdE'), 'Abcde',);
	});

	QUnit.test('Вспомогательная функция сортирует буквы в слове', function (assert) {
		assert.strictEqual(sortLetters('абв'), 'абв');
		assert.strictEqual(sortLetters('аБв'), 'аБв');
		assert.strictEqual(sortLetters('аёАЁ'), 'аАёЁ');
		assert.strictEqual(sortLetters('zzZz'), 'zzZz',);
		assert.strictEqual(sortLetters('AbCdE'), 'AbCdE',);
	});



});
