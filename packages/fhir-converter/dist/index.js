!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@surveybuilder/models")):"function"==typeof define&&define.amd?define(["@surveybuilder/models"],t):"object"==typeof exports?exports.FhirConverter=t(require("@surveybuilder/models")):e.FhirConverter=t(e["@surveybuilder/models"])}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=20)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(18)),i=n(r(19));t.questionnaireResponseItemConverter={toModel:e=>({id:e.id,text:e.text,questionId:e.linkId,items:e.item&&e.item.map(e=>t.questionnaireResponseItemConverter.toModel(e)),answers:e.answer&&e.answer.map(e=>o.default(e))}),fromModel:e=>({id:e.id,linkId:e.questionId,text:e.text,answer:e.answers&&e.answers.map(e=>i.default(e)),item:e.items&&e.items.map(e=>t.questionnaireResponseItemConverter.fromModel(e))})},t.default=t.questionnaireResponseItemConverter},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=r(3),a=r(5),u=r(8),s=r(10),l=r(11),d=r(12),c=r(13),f=r(14),v=r(16),p=r(17);t.questionnaireItemConverter={toModel:e=>({id:e.linkId,required:e.required,text:e.text,type:i.itemTypeToModelConverter(e.type,e.repeats),items:e.item&&e.item.map(e=>t.questionnaireItemConverter.toModel(e)),enableWhen:e.enableWhen&&e.enableWhen.map(e=>a.enableWhenToModelConverter(e)),enableBehavior:u.enableBehaviorToModelConverter(e.enableBehavior),initialAnswers:e.initial&&e.initial.map(e=>s.initialAnswerToModelConverter(e)),options:e.answerOption&&e.answerOption.map(e=>l.answerOptionToModelConverter(e)),multipleFiles:i.itemTypeToModelConverter(e.type,e.repeats)===o.ATTACHMENT&&e.repeats}),fromModel:e=>({linkId:e.id,required:e.required,text:e.text,type:d.itemTypeFromModelConverter(e.type),repeats:e.type===o.MULTI_CHOICE||e.multipleFiles,item:e.items&&e.items.map(e=>t.questionnaireItemConverter.fromModel(e)),enableWhen:e.enableWhen&&e.enableWhen.map(e=>f.enableWhenFromModelConverter(e)),enableBehavior:c.enableBehaviorFromModelConverter(e.enableBehavior),initial:e.initialAnswers&&e.initialAnswers.map(t=>p.initialAnswerFromModelConverter(t,e.type)),answerOption:e.options&&e.options.map(e=>v.answerOptionFromModelConverter(e))})},t.default=t.questionnaireItemConverter},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(4));t.itemTypeToModelConverter=(e,t)=>{if(e===i.CHOICE&&t)return o.MULTI_CHOICE;switch(e){case i.GROUP:return o.GROUP;case i.DISPLAY:return o.DISPLAY;case i.BOOLEAN:return o.BOOLEAN;case i.ATTACHMENT:return o.ATTACHMENT;case i.CHOICE:return o.CHOICE;case i.DATE:return o.DATE;case i.DATE_TIME:return o.DATE_TIME;case i.DECIMAL:return o.DECIMAL;case i.OPEN_CHOICE:return o.OPEN_CHOICE;case i.STRING:return o.STRING;case i.TIME:return o.TIME;case i.TEXT:return o.TEXT;default:return o.DISPLAY}},t.default=t.itemTypeToModelConverter},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GROUP="group",t.DISPLAY="display",t.BOOLEAN="boolean",t.DECIMAL="decimal",t.DATE="date",t.DATE_TIME="dateTime",t.TIME="time",t.TEXT="text",t.CHOICE="choice",t.OPEN_CHOICE="open-choice",t.MULTI_CHOICE="multi-choice",t.ATTACHMENT="attachment",t.STRING="string"},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(6));t.enableWhenToModelConverter=e=>{return{id:e.id,questionId:e.question,answer:e.answerBoolean||e.answerDecimal||e.answerInteger||e.answerDate||e.answerDateTime||e.answerTime||e.answerString,operator:o.default(e.operator)}},t.default=t.enableWhenToModelConverter},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(7));t.operatorToModelConverter=e=>{switch(e){case i.EXISTS:return o.EXISTS;case i.EQUAL:return o.EQUAL;case i.LESS:return o.LESS;case i.LESS_OR_EQUAL:return o.LESS_OR_EQUAL;case i.MORE:return o.MORE;case i.MORE_OR_EQUAL:return o.MORE_OR_EQUAL;case i.NOT_EQUAL:return o.NOT_EQUAL;default:return o.EQUAL}},t.default=t.operatorToModelConverter},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EXISTS="exists",t.EQUAL="=",t.NOT_EQUAL="!=",t.MORE=">",t.LESS="<",t.MORE_OR_EQUAL=">=",t.LESS_OR_EQUAL="<="},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=r(9);t.enableBehaviorToModelConverter=e=>{switch(e){case i.ALL:return o.AND;case i.ANY:return o.OR;default:return o.AND}},t.default=t.enableBehaviorToModelConverter},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ALL="all",t.ANY="any"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialAnswerToModelConverter=e=>{return{id:e.id,value:e.valueBoolean||e.valueDecimal||e.valueInteger||e.valueDate||e.valueDateTime||e.valueTime||e.valueString}},t.default=t.initialAnswerToModelConverter},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.answerOptionToModelConverter=e=>{return{id:e.id,value:e.valueInteger||e.valueDate||e.valueTime||e.valueString,defaultSelected:e.initialSelected}},t.default=t.answerOptionToModelConverter},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(4));t.itemTypeFromModelConverter=e=>{switch(e){case o.GROUP:return i.GROUP;case o.DISPLAY:return i.DISPLAY;case o.BOOLEAN:return i.BOOLEAN;case o.ATTACHMENT:return i.ATTACHMENT;case o.CHOICE:return i.CHOICE;case o.DATE:return i.DATE;case o.DATE_TIME:return i.DATE_TIME;case o.DECIMAL:return i.DECIMAL;case o.OPEN_CHOICE:return i.OPEN_CHOICE;case o.STRING:return i.STRING;case o.TIME:return i.TIME;case o.TEXT:return i.TEXT;case o.MULTI_CHOICE:return i.CHOICE;default:return i.DISPLAY}},t.default=t.itemTypeFromModelConverter},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(9));t.enableBehaviorFromModelConverter=e=>{switch(e){case o.AND:return i.ALL;case o.OR:return i.ANY;default:return i.ALL}},t.default=t.enableBehaviorFromModelConverter},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(15));t.enableWhenFromModelConverter=e=>{return{id:e.id,question:e.questionId,answerString:e.answer,operator:o.default(e.operator)}},t.default=t.enableWhenFromModelConverter},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),i=n(r(7));t.operatorFromModelConverter=e=>{switch(e){case o.EXISTS:return i.EXISTS;case o.EQUAL:return i.EQUAL;case o.LESS:return i.LESS;case o.LESS_OR_EQUAL:return i.LESS_OR_EQUAL;case o.MORE:return i.MORE;case o.MORE_OR_EQUAL:return i.MORE_OR_EQUAL;case o.NOT_EQUAL:return i.NOT_EQUAL;default:return i.EQUAL}},t.default=t.operatorFromModelConverter},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.answerOptionFromModelConverter=e=>{return{id:e.id,valueString:e.value,initialSelected:e.defaultSelected}},t.default=t.answerOptionFromModelConverter},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0));t.initialAnswerFromModelConverter=(e,t)=>{let r;switch(t){case o.TEXT:case o.STRING:r="valueString";break;case o.DECIMAL:r="valueDecimal";break;case o.BOOLEAN:r="valueBoolean";break;case o.TIME:r="valueTime";break;case o.DATE:r="valueDate";break;case o.DATE_TIME:r="valueDateTime";break;case o.ATTACHMENT:r="valueAttachment";break;default:r="valueString"}return{id:e.id,[r]:e.value}},t.default=t.initialAnswerFromModelConverter},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(1));t.answerToModelConverter=e=>{return{id:e.id,items:e.item&&e.item.map(e=>o.default.toModel(e)),value:e.valueBoolean||e.valueDecimal||e.valueInteger||e.valueDate||e.valueDateTime||e.valueTime||e.valueString}},t.default=t.answerToModelConverter},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(1));t.answerFromModelConverter=e=>{return{id:e.id,valueString:e.value,item:e.items&&e.items.map(e=>o.default.fromModel(e))}},t.default=t.answerFromModelConverter},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(21)),n(r(22)),n(r(2)),n(r(1)),n(r(18)),n(r(11)),n(r(8)),n(r(5)),n(r(10)),n(r(3)),n(r(6)),n(r(19)),n(r(16)),n(r(13)),n(r(14)),n(r(17)),n(r(12)),n(r(15))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);t.questionnaireConverter={toModel:e=>({description:e.description,title:e.title,id:e.id,items:e.item&&e.item.map(e=>n.questionnaireItemConverter.toModel(e))}),fromModel:e=>({resourceType:"Questionnaire",id:e.id,description:e.description,title:e.title,item:e.items&&e.items.map(e=>n.questionnaireItemConverter.fromModel(e))})},t.default=t.questionnaireConverter},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);t.questionnaireResponseConverter={toModel:e=>({id:e.id,questionnaireId:e.resourceType.slice(14),items:e.item.map(e=>n.questionnaireResponseItemConverter.toModel(e))}),fromModel:e=>({id:e.id,questionnaire:`Questionnaire/${e.questionnaireId}`,resourceType:"QuestionnaireResponse",item:e.items&&e.items.map(e=>n.questionnaireResponseItemConverter.fromModel(e))})},t.default=t.questionnaireResponseConverter}])}));