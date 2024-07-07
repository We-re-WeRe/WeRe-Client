export type Tday = 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat';
interface IDay {
  id: Tday;
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
];

export default DAYS;
