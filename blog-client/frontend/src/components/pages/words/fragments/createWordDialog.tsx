import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { object, string } from "yup";
import { useCreateWordMutation, useUpdateWordMutation } from "../../../../reducers/appApis";
import { Word } from "../../../../types/word";
import { BasicButton } from "../../../atoms/basicButton/basicButton";
import { CancelButton } from "../../../atoms/cancelButton/cancelButton";

type Props = {
  open: boolean;
  handleClose: () => void;
  selectedWord?: Word;
};

type FormData = {
  title: string;
  definition: string;
};

const schema = object({
  title: string().required("入力"),
  definition: string().required("入力"),
});

export const CreateWordDialog: FC<Props> = ({ open, handleClose, selectedWord }) => {
  const [createWord] = useCreateWordMutation();
  const [updateWord] = useUpdateWordMutation();

  const { control, handleSubmit, watch, setValue } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: selectedWord?.title,
      definition: selectedWord?.definition,
    },
  });

  const [title, definition] = watch(["title", "definition"]);

  const handleSubmitData = async (data: FormData) => {
    const { title, definition } = data;
    try {
      let res;
      if (selectedWord?.id.toString()) {
        res = await updateWord({ id: selectedWord.id, title, definition }).unwrap();
      } else {
        res = await createWord({ title, definition }).unwrap();
      }
      if (res) {
        handleClose();
      }
    } catch (e) {
      console.log(e);
    }
    handleClose();
  };

  useEffect(() => {
    setValue("title", selectedWord?.title ?? "");
    setValue("definition", selectedWord?.definition ?? "");
  }, [selectedWord, setValue]);

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>{selectedWord ? "Edit a word" : "Add a word"}</DialogTitle>
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
            <BasicButton type='submit' title='OK' disabled={!title || !definition} />
          </Box>
        </DialogActions>
      </form>
    </Dialog>
  );
};
