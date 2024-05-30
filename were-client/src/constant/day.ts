interface IDay {
  id: string;
  text: string;
}

const DAYS: IDay[] = [
  { id: 'sun', text: '일' },
  { id: 'mon', text: '월' },
  { id: 'tue', text: '화' },
  { id: 'wed', text: '수' },
  { id: 'thu', text: '목' },
  { id: 'fri', text: '금' },
  { id: 'sat', text: '토' },
  { id: 'all', text: '전체' },
];

export default DAYS;
