import { Injectable } from '@angular/core';
import { Widget, IWidgetActionPlanPayoad, IWidgetSmallPayoad} from './widget';
@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private _widgets: Widget[] = [];
  constructor() {
    let w1: Widget = new Widget('small',`Annual Retirement Income`, 1, 27);
    w1.handsetCol = 2;
    w1.handsetRow = 27;
    w1.description = `Using baseline calculations for 2019`;
    w1.actionText = `Optimize for Annual Income`;
    w1.payload = {
      total: 160287,
      imageUrl: `url('/assets/img/Financial freedom.svg')`
    } as IWidgetSmallPayoad;
    let w2 = new Widget('small',`Estate Value`, 1, 27);
    w2.handsetCol = 2;
    w2.handsetRow = 27;
    w2.description = `Using baseline calculations for 2019`;
    w2.actionText = `Optimize for Estate Value`;
    w2.payload = {
      total: 1197869,
      imageUrl: `url('/assets/img/Saving money.svg')`
    } as IWidgetSmallPayoad;
    let w3 = new Widget('action-plan',`Action Plan`, 2, 60);
    w3.handsetCol = 2;
    w3.handsetRow = 60;
    w3.description = `See what you’ll do each year in to keep your retirement on track.`;
    w3.actionText = `Export Action Plan`;
    w3.payload = {
      currentAge: 54,
      slider: {
        startYear: 2019,
        endYear: 2060
      },
      todoList: [
        {
          year: 2019,
          todos: [
          {'description': `Withdraw $16,112 from RRSP F2UA0S0Q.`, "done": true},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": true},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": true},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2020,
          todos: [
          {'description': `Withdraw $17,801 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $3,111 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $19,814 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2021,
          todos: [
          {'description': `Withdraw $19,794 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $8,670 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $9,209 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2022,
          todos: [
          {'description': `Withdraw $1,198 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $8,627 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $8,686 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2023,
          todos: [
          {'description': `Withdraw $17,825 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $2,240 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $20,326 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2024,
          todos: [
          {'description': `Withdraw $9,543 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $19,614 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $20,102 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2025,
          todos: [
          {'description': `Withdraw $15,802 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $17,736 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $14,618 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2026,
          todos: [
          {'description': `Withdraw $16,473 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $4,607 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $14,144 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2027,
          todos: [
          {'description': `Withdraw $7,260 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $5,689 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $11,649 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2028,
          todos: [
          {'description': `Withdraw $4,274 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $3,233 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $3,329 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2029,
          todos: [
          {'description': `Withdraw $5,357 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $7,687 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $16,747 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2030,
          todos: [
          {'description': `Withdraw $2,464 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $12,682 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $1,891 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2031,
          todos: [
          {'description': `Withdraw $5,244 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $14,656 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $15,649 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2032,
          todos: [
          {'description': `Withdraw $3,340 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $17,914 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $9,736 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2033,
          todos: [
          {'description': `Withdraw $17,680 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $7,844 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $14,135 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2034,
          todos: [
          {'description': `Withdraw $11,392 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $20,784 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $12,320 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2035,
          todos: [
          {'description': `Withdraw $8,467 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $18,224 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $8,326 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2036,
          todos: [
          {'description': `Withdraw $19,714 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $10,859 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $18,292 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2037,
          todos: [
          {'description': `Withdraw $8,159 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $19,395 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $16,691 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2038,
          todos: [
          {'description': `Withdraw $3,246 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $13,148 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $3,774 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2039,
          todos: [
          {'description': `Withdraw $9,713 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $5,456 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $5,653 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2040,
          todos: [
          {'description': `Withdraw $5,172 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $2,443 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $14,716 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2041,
          todos: [
          {'description': `Withdraw $13,848 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $7,104 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $19,791 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2042,
          todos: [
          {'description': `Withdraw $19,779 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $12,829 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $13,563 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2043,
          todos: [
          {'description': `Withdraw $5,217 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $11,213 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $17,835 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2044,
          todos: [
          {'description': `Withdraw $5,597 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $2,755 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $13,603 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2045,
          todos: [
          {'description': `Withdraw $9,497 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $5,311 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $11,246 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2046,
          todos: [
          {'description': `Withdraw $20,683 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $20,296 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $10,810 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2047,
          todos: [
          {'description': `Withdraw $17,216 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $7,573 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $12,772 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2048,
          todos: [
          {'description': `Withdraw $14,948 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $15,176 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $16,118 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2049,
          todos: [
          {'description': `Withdraw $6,309 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $4,942 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $19,515 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2050,
          todos: [
          {'description': `Withdraw $8,906 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $18,499 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $20,316 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2051,
          todos: [
          {'description': `Withdraw $18,511 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $19,277 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $13,269 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2052,
          todos: [
          {'description': `Withdraw $8,307 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $4,397 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $11,531 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2053,
          todos: [
          {'description': `Withdraw $3,935 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $4,736 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $16,964 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2054,
          todos: [
          {'description': `Withdraw $14,735 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $17,288 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $12,224 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2055,
          todos: [
          {'description': `Withdraw $10,357 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $3,829 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $11,130 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2056,
          todos: [
          {'description': `Withdraw $19,794 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $14,334 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $14,842 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2057,
          todos: [
          {'description': `Withdraw $8,340 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $1,897 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $12,972 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2058,
          todos: [
          {'description': `Withdraw $15,893 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $7,953 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $9,921 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2059,
          todos: [
          {'description': `Withdraw $15,135 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $19,143 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $20,678 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
        {
          year: 2060,
          todos: [
          {'description': `Withdraw $2,494 from RRSP F2UA0S0Q.`, "done": false},
          {'description': `Withdraw $5,489 from TFSA F2UA0T3Y.`, "done": false},
          {'description': `Withdraw $14,559 from Non-Registered G2UB5F6G.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
          {'description': `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz.`, "done": false},
        ]},
      ]
    } as IWidgetActionPlanPayoad;
    this.addWidget(w1);
    this.addWidget(w2);
    this.addWidget(w3);
  }
  public addWidget = (widget: Widget) => {
    this._widgets.push(widget);
  }
  public getWidgets = (): Widget[] => {
    return this._widgets;
  }
  public updateHandheldWidgets = (isHandheld: boolean) => {
    this._widgets = this._widgets.map(w => {
      w.isHandheld = isHandheld;
      return w;
    });
  }
}

