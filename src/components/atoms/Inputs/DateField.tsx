import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from "react";
import Field from "./TextField"

interface DateFieldI {
  onChange: (value: any) => void
  startDate: Date
  placeholder: string
  disable?: boolean
}

const DateField = ({ onChange, startDate, placeholder, disable }: DateFieldI) => {
  const [ openPicker, setOpenPicker ] = useState<boolean>(false)

  const openDatePicker = () => {
    console.log("🚀 ~ file: DateField.tsx ~ line 18 ~ openDatePicker ~ disable", disable)
    if(disable) return
    setOpenPicker(true)
  }
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker 
        label="Custom input"
        value={startDate}
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
