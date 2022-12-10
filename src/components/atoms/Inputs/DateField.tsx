import { CalendarPickerView, DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from "react";
import Field from "./TextField"

interface DateFieldI {
  onChange: (value: any) => void
  startDate: Date | null
  placeholder: string
  disable?: boolean
  views?: CalendarPickerView[]
}

const DateField = ({ onChange, startDate, placeholder, disable, views }: DateFieldI) => {
  const [ openPicker, setOpenPicker ] = useState<boolean>(false)

  const openDatePicker = () => {
    if(disable) return
    setOpenPicker(true)
  }
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker 
        label="Custom input"
        value={startDate}
        views={ views }
        onChange={onChange}
        open={openPicker}
        closeOnSelect={true}
        onClose={() => setOpenPicker(false)}
        disabled={disable}
        renderInput={({ inputRef, inputProps }) => (
          <>
            <Field
              ref={inputRef}
              {...inputProps}
              placeholder={placeholder}
              onClick={openDatePicker}
            />
          </>
        )}
      />
    </LocalizationProvider>
  )
}

export default DateField
