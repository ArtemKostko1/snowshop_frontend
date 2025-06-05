import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useStyles } from './ContactsPage.styles';

const ContactsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" component="h1" className={classes.pageTitle}>
        Контакты SNOWSHOP
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardContent>
              <Typography variant="h6" className={classes.sectionTitle}>
                Время работы
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon style={{ color: '#4dc6cb' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Онлайн-магазин (обработка заказов, консультация)"
                    secondary="каждый день с 10:00 до 22:00"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccessTimeIcon style={{ color: '#4dc6cb' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Оффлайн-магазин"
                    secondary="каждый день с 11:00 до 21:00"
                  />
                </ListItem>
              </List>

              <Divider className={classes.divider} />

              <Typography variant="h6" className={classes.sectionTitle}>
                Наш адрес
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: '#4dc6cb' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="г. Минск, ул. Притыцкого, дом 1"
                    secondary="ст. м. Спортивная"
                  />
                </ListItem>
              </List>

              <Divider className={classes.divider} />

              <Typography variant="h6" gutterBottom className={classes.sectionTitle}>
                Связаться с нами
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: '#4dc6cb' }} />
                  </ListItemIcon>
                  <ListItemText primary="+375 29 000 00 00" secondary="Telegram, Viber, WhatsApp" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon style={{ color: '#4dc6cb' }} />
                  </ListItemIcon>
                  <ListItemText primary="shop@snowshop.by" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InstagramIcon style={{ color: '#4dc6cb' }} />
                  </ListItemIcon>
                  <ListItemText primary="@snowshop.by" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.mapCard}>
            <CardContent>
              <Typography variant="h6" gutterBottom className={classes.sectionTitle}>
                Как нас найти
              </Typography>
              <Box className={classes.mapContainer}>
                {/* Виджет Яндекс Карты */}
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '500px',
                    width: '100%',
                  }}
                >
                  <a
                    href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps"
                    style={{
                      color: '#eee',
                      fontSize: '12px',
                      position: 'absolute',
                      top: '0px',
                      zIndex: 2,
                    }}
                  >
                    Яндекс Карты
                  </a>
                  <a
                    href="https://yandex.by/maps/?ll=27.481632%2C53.908080&utm_medium=mapframe&utm_source=maps&z=16"
                    style={{
                      color: '#eee',
                      fontSize: '12px',
                      position: 'absolute',
                      top: '14px',
                      zIndex: 2,
                    }}
                  >
                    г. Минск, ул. Притыцкого, дом 1
                  </a>
                  <iframe
                    src="https://yandex.by/map-widget/v1/?ll=27.481632%2C53.908080&z=16&pt=27.481632,53.908080"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    allowFullScreen={true}
                    style={{ position: 'relative', zIndex: 1 }}
                  />
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box className={classes.footerBox}>
        <Typography variant="body1" align="center">
          По любым вопросам и предложениям связывайтесь с нами по телефону +375 29 000 00 00
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactsPage;
