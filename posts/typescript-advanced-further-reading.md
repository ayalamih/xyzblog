---
title: "TypeScript Further Reading"
date: "2022-02-04"
author: "Jumier"
---

## 扩展阅读
此处记录了[官方手册](https://www.typescriptlang.org/docs/handbook/basic-types.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/)）中包含，但是本书未涉及的概念。

我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。

- [Never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)（[中文版]()）：永远不存在值的类型，一般用于错误处理函数
- [Variable Declarations](https://www.typescriptlang.org/docs/handbook/variable-declarations.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable%20Declarations.html)）：使用 let 和 const 替代 var，这是 ES6 的知识
- [this](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html#this)：箭头函数的运用，这是 ES6 的知识
- [Using Class Types in Generics](https://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html#%E5%9C%A8%E6%B3%9B%E5%9E%8B%E9%87%8C%E4%BD%BF%E7%94%A8%E7%B1%BB%E7%B1%BB%E5%9E%8B)）：创建工厂函数时，需要引用构造函数的类类型
- [Best common type](https://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E6%9C%80%E4%BD%B3%E9%80%9A%E7%94%A8%E7%B1%BB%E5%9E%8B)）：数组的类型推论
- [Contextual Type](https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E4%B8%8A%E4%B8%8B%E6%96%87%E7%B1%BB%E5%9E%8B)）：函数输入的类型推论
- [Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Compatibility.html)）：允许不严格符合类型，只需要在一定规则下兼容即可
- [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types )（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B%EF%BC%88intersection-types%EF%BC%89)）：使用 & 将多种类型的共有部分叠加成一种类型
- [Type Guards and Differentiating Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B%EF%BC%88type-guards-and-differentiating-types%EF%BC%89)）：联合类型在一些情况下被识别为特定的类型
- [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%8F%AF%E8%BE%A8%E8%AF%86%E8%81%94%E5%90%88%EF%BC%88discriminated-unions%EF%BC%89)）：使用 | 联合多个接口的时候，通过一个共有的属性形成可辨识联合
- [Polymorphic this types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%A4%9A%E6%80%81%E7%9A%84this%E7%B1%BB%E5%9E%8B)）：父类的某个方法返回 this，当子类继承父类后，子类的实例调用此方法，返回的 this 能够被 TypeScript 正确的识别为子类的实例。
- [Symbols](https://www.typescriptlang.org/docs/handbook/symbols.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Symbols.html)）：新原生类型，这是 ES6 的知识
- [Iterators and Generators](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators%20and%20Generators.html)）：迭代器，这是 ES6 的知识
- [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces.html)）：避免全局污染，现在已被 ES6 Module 替代
- [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Decorators.html)）：修饰器，这是 ES7 的一个提案
- [Mixins](https://www.typescriptlang.org/docs/handbook/mixins.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Mixins.html)）：一种编程模式，与 TypeScript 没有直接关系，可以参考 ES6 中 Mixin 模式的实现
