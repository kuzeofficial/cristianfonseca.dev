import dayjs from "dayjs";
type PropsType = {
  date: string;
  format: string;
}
export const formatDate = ({date, format}: PropsType) => {
  return dayjs(date).format(format);
};
