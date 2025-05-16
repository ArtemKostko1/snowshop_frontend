import React from "react";
import {
  Box,
  Button,
  Stack,
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { EditToolbarProps } from "../../../../common/types/table/toolbarTypes";
import { navigationStyles, navigationActionStyles } from "./EditToolbar.styles";
import { IProduct } from "../../../../common/types/product/productTypes";
import { IBrand } from "../../../../common/types/brand/brandTypes";
import { ICategory } from "../../../../common/types/category/categoryTypes";

export function EditToolbar<T extends IProduct | IBrand | ICategory>({
  onAdd,
  navigation,
}: EditToolbarProps<T>) {
  return (
    <Toolbar>
      <Stack direction="row" spacing={2} alignItems="center" width="100%">
        {navigation && (
          <BottomNavigation
            showLabels
            value={navigation.value}
            onChange={(_, newValue) => navigation.onChange(newValue)}
            sx={navigationStyles}
          >
            {navigation.items.map((item) => (
              <BottomNavigationAction
                key={item.value}
                label={item.label}
                sx={navigationActionStyles}
              />
            ))}
          </BottomNavigation>
        )}
        <Box flexGrow={1} />
        <Button color="primary" startIcon={<AddIcon />} onClick={onAdd}>
          Добавить
        </Button>
      </Stack>
    </Toolbar>
  );
}
