import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "yup";
import { useCreateWordMutation } from "../../../../reducers/appApis";
import { BasicButton } from "../../../atoms/basicButton/basicButton";
import { CancelButton } from "../../../atoms/cancelButton/cancelButton";

type Props = {
  open: boolean;
  handleClose: () => void;
};

type FormData = {
  title: string;
  definition: string;
};

const schema = object({
  title: string().required("入力"),
  definition: string().required("入浴"),
});

export const CreateWordDialog: FC<Props> = ({ open, handleClose }) => {
  const [createWord] = useCreateWordMutation();

  const { control, handleSubmit, watch } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      definition: "",
    },
  });

  const [title, definition] = watch(["title", "definition"]);
  console.log(title, definition);

  const handleSubmitData = async (data: FormData) => {
    console.log(data);
    const { title, definition } = data;
    try {
      await createWord({ title, definition });
    } catch (e) {
      console.log(e);
    }
    handleClose();
  };

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>Add a word</DialogTitle>
      <form onSubmit={handleSubmit(handleSubmitData)} noValidate>
        <DialogContent>
          <Stack gap={2}>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <TextField {...field} color='secondary' type='text' required fullWidth label='title' />
              )}
            />
            <Controller
              name='definition'
              control={control}
              render={({ field }) => (
                <TextField {...field} color='secondary' type='text' required fullWidth label='definition' />
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: "24px", py: "20px" }}>
          <Box component='div' display='flex' justifyContent='flex-end' width='100%' gap={2}>
            <CancelButton onClick={handleClose} />
            <BasicButton type='submit' title='OK' />
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};
