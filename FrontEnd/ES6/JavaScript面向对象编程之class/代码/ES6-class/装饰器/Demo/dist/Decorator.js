"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/**
 * 
 * @param {*} target ：所作用的对象
 * @param {*} prop ：作用的成员名
 * @param {*} descriptor ：属性描述符
 */
function writeBug(target, prop, descriptor) {
  console.log(target);
  console.log(prop);
  console.log(descriptor); // 存储原来的函数

  var value = descriptor.value; // 重写value

  descriptor.value = function () {
    console.error("\u2193\u2193\u2193\u522B\u542C".concat(this.name, "\u7684\u5439\u725B\uFF0C\u4ED6\u5C31\u662F\u4E00Bug\u5DE5\u7A0B\u5E08"));
    value.call(this);
  };
}

var Person = (_class = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: "writeCode",
    value: function writeCode() {
      console.log("".concat(this.name, "\u80FD\u5199\u51FA\u5F88\u597D\u7684\u4EE3\u7801"));
    }
  }]);

  return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, "writeCode", [writeBug], Object.getOwnPropertyDescriptor(_class.prototype, "writeCode"), _class.prototype)), _class);
var wick = new Person("Wick");
wick.writeCode();
