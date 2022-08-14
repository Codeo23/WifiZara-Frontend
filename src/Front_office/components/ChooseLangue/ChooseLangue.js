import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';
import cookies from 'js-cookie'
import {useTranslation} from "react-i18next"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LanguageIcon from '@mui/icons-material/Language';
import Select from '@mui/material/Select';
import i18next from 'i18next'
import { makeStyles } from '@mui/styles';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Avatar} from "@mui/material"

const languages = [
     {
       code: 'fr',
       name: 'Français',
       country_code: 'fr',
       url:'https://imgs.search.brave.com/qkeC6G98-j4Bo7aze5WWvwu7LWSld5AfCvpezZ6tC_0/rs:fit:1200:962:1/g:ce/aHR0cDovL25vZGUw/MS5mbGFnc3RhdC5u/ZXQvbWVkaWEvaW1h/Z2UvMjU3NHIuanBn',
     },
     {
       code: 'en',
       name: 'English',
       country_code: 'gb',
       url:'https://imgs.search.brave.com/Zt7ekJvP8Sn_NEcLzmXD1ZWh4NwWDDcMMClohDwIJWg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ub2Rl/MDEuZmxhZ3N0YXQu/bmV0L21lZGlhL2Nh/dGFsb2cvcHJvZHVj/dC9kZXRhaWwvcGV0/aXQtZHJhcGVhdS1y/b3lhdW1lLXVuaS0x/Mjg3LmpwZw'
     },
     {
       code: 'mg',
       name: 'Malagasy',
       country_code: 'ml',
       dir: 'spa',
       url:'https://imgs.search.brave.com/lU_bwpY4FBA7Z9wvz7buBhhQ0TEvFeTBwylcm4knH7s/rs:fit:1200:780:1/g:ce/aHR0cDovL2Nkbi5t/b25zaWV1ci1kZXMt/ZHJhcGVhdXguY29t/L21lZGlhL2ltYWdl/LzU1MjNyLmpwZw'
     },
]

const useStyles = makeStyles((theme)=>({
     root: {
       
     },
}));

const ChooseLangue = () => {
     const currentLanguageCode = cookies.get('i18next') || 'en'
     const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
     const { t } = useTranslation()
     const classes = useStyles(); 
     const [view, setView] = React.useState('list');

     const handleChange = (event, nextView) => {
       setView(nextView);
     }; 

     useEffect(() => {
          console.log('Setting page stuff')
          document.title = t('app_title')
     }, [currentLanguage, t])
    
     return (
          <Box position="absolute">
               <ToggleButtonGroup
                    orientation="vertical"
                    value={view}
                    exclusive
                    onChange={handleChange}
               >    
                    {languages.map(lang=>(
                    <ToggleButton value="list" aria-label="list">
                         <Avatar src={lang.url} onClick={() => {i18next.changeLanguage(lang.code)}} key={lang.code} value={lang.code}/>
                    </ToggleButton>
                    ))}
               </ToggleButtonGroup>
          </Box>
  );
}

export default ChooseLangue;