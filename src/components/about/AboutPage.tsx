import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HistoryIcon from '@mui/icons-material/History';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useStyles } from './AboutPage.styles';

const AboutPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" component="h1" className={classes.pageTitle}>
        О SNOWSHOP
      </Typography>

      <Grid container spacing={2}>
        {/* Основная информация */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardContent>
              <Box className={classes.iconTitleBox}>
                <InfoIcon color="primary" fontSize="large" />
                <Typography variant="h5" className={classes.sectionTitle}>
                  О нас
                </Typography>
              </Box>
              <Divider className={classes.divider} />
              <Typography variant="body1" paragraph>
                Мы - бордшоп из Беларуси, который действительно любит то, что делает. Вся наша
                команда катается на разных видах досок и мы с удовольствием всегда готовы поделиться
                с Вами нашими знаниями и опытом, чтобы оказать помощь в выборе своего личного
                оборудования.
              </Typography>
              <Typography variant="body1" paragraph>
                Наша история началась с 2013 года и имеет очень большое содержание ;) На сегодняшний
                день, SNOWSHOP - это намного больше, чем очередной магазин. SNOWSHOP - это команда,
                которая объединена любовью к досочным видам спорта и активно продвигает эти
                направления в Вашу жизнь.
              </Typography>
              <Typography variant="body1" paragraph>
                Мы регулярно увеличиваем ассортимент нашего бордшопа, расширяем географию доставок,
                открываем новые направления, организовываем различные мероприятия по популяризации
                активного образа жизни и проводим разного уровня соревнования для любителей и
                профессионалов. Добро пожаловать в нашу большую семью!
              </Typography>
              <Typography variant="h6" className={classes.slogan}>
                WE ARE YOUR FAMILY!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* История компании */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardContent>
              <Box className={classes.iconTitleBox}>
                <HistoryIcon color="primary" fontSize="large" />
                <Typography variant="h5" className={classes.sectionTitle}>
                  Наша история
                </Typography>
              </Box>
              <Divider className={classes.divider} />
              <Box className={classes.timelineContainer}>
                <Box className={classes.timelineItem}>
                  <Typography variant="h6">2013</Typography>
                  <Typography variant="body2">
                    Основание компании. Открытие первого магазина в Минске.
                  </Typography>
                </Box>
                <Box className={classes.timelineItem}>
                  <Typography variant="h6">2015</Typography>
                  <Typography variant="body2">
                    Запуск интернет-магазина и расширение ассортимента.
                  </Typography>
                </Box>
                <Box className={classes.timelineItem}>
                  <Typography variant="h6">2018</Typography>
                  <Typography variant="body2">
                    Начало сотрудничества с ведущими мировыми брендами.
                  </Typography>
                </Box>
                <Box className={classes.timelineItem}>
                  <Typography variant="h6">2020</Typography>
                  <Typography variant="body2">
                    Открытие нового просторного магазина рядом с метро.
                  </Typography>
                </Box>
                <Box className={classes.timelineItem}>
                  <Typography variant="h6">2023</Typography>
                  <Typography variant="body2">
                    Юбилей компании - 10 лет с вами! Обновление концепции и дизайна.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Наши преимущества */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardContent>
              <Box className={classes.iconTitleBox}>
                <EmojiEventsIcon color="primary" fontSize="large" />
                <Typography variant="h5" className={classes.sectionTitle}>
                  Наши преимущества
                </Typography>
              </Box>
              <Divider className={classes.divider} />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Экспертность"
                    secondary="Наши консультанты сами являются опытными райдерами"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Качество"
                    secondary="Мы работаем только с проверенными брендами и поставщиками"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Сервис"
                    secondary="Быстрая доставка и профессиональное обслуживание"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Сообщество"
                    secondary="Мы создаем и поддерживаем комьюнити единомышленников"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Мероприятия"
                    secondary="Регулярно проводим соревнования и тематические встречи"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Наша команда */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={0} className={classes.card}>
            <CardContent>
              <Box className={classes.iconTitleBox}>
                <PeopleIcon color="primary" fontSize="large" />
                <Typography variant="h5" className={classes.sectionTitle}>
                  Наша команда
                </Typography>
              </Box>
              <Divider className={classes.divider} />
              <Typography variant="body1" paragraph>
                Наша команда состоит из профессионалов и энтузиастов своего дела. Мы объединены
                любовью к снежным видам спорта и стремлением делиться этой страстью с нашими
                клиентами. Каждый член команды SNOWSHOP имеет богатый опыт катания и глубокие знания
                о снаряжении, что позволяет нам давать экспертные рекомендации и помогать вам делать
                правильный выбор.
              </Typography>
              <Typography variant="body1">
                Мы не просто продаем товары – мы создаем сообщество единомышленников, где каждый
                может найти поддержку, совет и вдохновение для новых достижений в любимом виде
                спорта!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Футер */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Box className={classes.footerBox}>
            <Typography variant="h6" align="center" gutterBottom>
              Присоединяйтесь к нам!
            </Typography>
            <Typography variant="body1" align="center">
              Следите за нашими новостями в социальных сетях и будьте в курсе всех событий и акций.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
