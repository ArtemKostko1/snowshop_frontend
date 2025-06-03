import { toast } from "react-toastify";
import toastMessages from "../../../../common/constants/toastMessages";

export const checkRequiredFields = (
  data: Record<string, unknown>,
  columns: string[]
) => {
  const isEmpty = columns.some((column) => {
    const value = data[column];
    return value === null || value === undefined || value === "";
  });

  if (isEmpty) {
    toast.info(toastMessages.common.REQUIRED_TABLE_FIELDS);
  }

  return !isEmpty; // Возвращаем true, если все обязательные поля заполнены, иначе false
};
