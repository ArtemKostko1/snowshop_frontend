import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import { useStyles } from './DeliveryPage.styles';

const DeliveryPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" component="h1" className={classes.pageTitle}>
        Доставка и оплата
      </Typography>

      <Grid container spacing={2}>
        {/* Сроки доставки */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardHeader
              avatar={<AccessTimeIcon color="primary" fontSize="large" />}
              title={<Typography variant="h5">Срок доставки</Typography>}
              className={classes.cardHeader}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Города Беларуси
              </Typography>
              <Typography paragraph>
                Курьерская доставка «до дверей» или в Пункт Выдачи Заказов (далее - ПВЗ)
                укладывается в срок 2-3 рабочих дней (не учитывая день подтверждения Вашего заказа).
                Точный срок доставки зависит от Вашего города.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Города СНГ
              </Typography>
              <Typography paragraph>
                Срок оперативной курьеской доставки «до дверей» или в ПВЗ зависит от города, в
                который нужно доставить товар. Как правило, срок варьируется от 2 до 14 дней. Мы
                доставляем наши товары во все города СНГ. Стоимость доставки зависит от габаритов
                посылки и города получателя.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Стоимость доставки */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardHeader
              avatar={<PaymentIcon color="primary" fontSize="large" />}
              title={<Typography variant="h5">Стоимость доставки</Typography>}
              className={classes.cardHeader}
            />
            <CardContent>
              <Typography paragraph>
                По городу Минску (в пределах МКАД) наш интернет-магазин осуществляет доставку только
                по полной предоплате товара. Стоимость доставки по Минску:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="При оформлении заказа до 199 BYN - 10-30 BYN" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="При оформлении заказа более 200 BYN - БЕСПЛАТНО" />
                </ListItem>
              </List>
              <Typography paragraph>
                По Беларуси стоимость доставки составит 5-30 BYN. При заказе от 499 BYN стоимость
                доставки по Беларуси будет бесплатной.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Способы доставки */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardHeader
              avatar={<LocalShippingIcon color="primary" fontSize="large" />}
              title={<Typography variant="h5">Возможные способы доставки</Typography>}
              className={classes.cardHeader}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Курьерская доставка включает в себя:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Обязательный звонок Вашего курьера в день доставки не менее, чем за 20 минут" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Оплата заказа при получении товара наличными или банковской картой" />
                </ListItem>
              </List>

              <Typography variant="h6" gutterBottom>
                Доставка в ПВЗ включает в себя:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="SMS уведомление о поступлении заказа в пункт" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Оплата заказа при получении наличными или по возможности банковской картой" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Дополнительная информация */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardContent>
              <Box className={classes.contactBox}>
                <Typography variant="body1" paragraph>
                  Остались вопросы? Пожалуйста, свяжитесь с нами по номеру +375 29 000 00 00
                  (Telegram, Viber, Whats App).
                </Typography>
                <Typography variant="body1" paragraph fontWeight="bold">
                  Мы благодарны Вам за то, что Вы выбираете SNOWSHOP!
                </Typography>
                <Typography variant="body1">
                  Режим работы доставки: каждый день с 9:00 до 24:00.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeliveryPage;
