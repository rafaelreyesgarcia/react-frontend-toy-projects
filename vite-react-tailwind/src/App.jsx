import React from 'react';
import chatIcon from './assets/chat.svg'
import profile from './assets/profile.jpg'
import searchIcon from './assets/searchIcon.svg'
import './App.css'
import { Box, ThemeProvider, createTheme } from '@mui/system'
import { Avatar } from '@mui/material'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
  shape: {
    borderRadius: 4 // default
  }
});

const people = [
  {
    imageUrl: './src/assets/avatar1.jpg',
    url: 'https://github.com/rafaelreyesgarcia',
    name: 'Leslie Abbot',
    title: 'Co-Founder / CEO',
    phone: '773',
    id: 0
  },
  {
    imageUrl: './src/assets/avatar2.jpg',
    url: 'https://github.com/rafaelreyesgarcia',
    name: 'Hector Adams',
    title: 'VP, Marketing',
    phone: '123',
    id: 1
  },
  {
    imageUrl: './src/assets/avatar3.jpg',
    url: 'https://github.com/rafaelreyesgarcia',
    name: 'Blake Alexander',
    title: 'Account Coordinator',
    phone: '345',
    id: 2
  }
];

function App() {

  return (
    <div className="App">
        {/* vanilla html and css */}
        <div className='chat-notification'>
          <div className='chat-notification-logo-wrapper'>
            <img className='chat-notification-logo' src={chatIcon} alt="chat logo" />
          </div>
          <div className='chat-notification-content'>
            <h4 className='chat-notification-title'>ChitChat</h4>
            <p className='chat-notification-message'>you have a new message!</p>
          </div>
        </div>
        
        {/* tailwind utility classes */}
        <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
          <div className=''>
            <img className='h-12 w-12' src={chatIcon} alt="chat icon" />
          </div>
          <div>
            <div className='text-xl font-medium text-black text-left'>ChitChat</div>
            <p className='text-slate-500'>you have a new message!</p>
          </div>
        </div>

        {/* material sx prop */}
        <ThemeProvider theme={theme}>
          <Box sx={{
            bgcolor: 'text.primary',
            p: '1.5rem', 
            maxWidth: '24rem', 
            mx: 'auto',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            borderRadius: 2,
            display: 'flex',
          }}>
            <Box sx={{ width:'3rem', height: '3rem'}}>
              <img src={chatIcon} alt="chat icon" />
            </Box>
            <Box sx={{ml: 2}}>
              <Box sx={{ color: 'rgb(0, 0, 0)', fontSize: '1.25rem', textAlign: 'left', lineHeight: '1.25'}}>
                ChitChat
              </Box>
              <Box sx={{color: 'text.secondary'}}>you have a new message!</Box>
            </Box>
          </Box>
        </ThemeProvider>

        {/* responsive tailwind component */}
        <div className='py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
          <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0' src={profile} alt="profile image" />
          <div>
            <div>
              <p className='text-lg text-black font-semibold'>
                Erin Lindford
              </p>
              <p className='text-slate-500 font-medium'>
                Product Engineer
              </p>
            </div>
            <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
              message
            </button>
          </div>
        </div>

        {/* component states */}
        <button className=' py-2 px-4 bg-sky-500 hover:bg-sky-700 mx-auto rounded-full sm:hover:bg-fuchsia-600 sm:active:bg-violet-700'>save changes</button>
        
        {/* forms */}
        <form>
          <label className='block'>
            <span className='block text-sm font-medium text-slate-300'>Username</span>
            <input type="text" value='username' className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            ' />
          </label>
        </form>

        {/* styling based on parent state with group modifier */}
        <a href="#parent-based-styled" id='parent-based-styled'
          className='group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3
          hover:bg-sky-500 hover:ring-sky-500'
        >
          <div className='flex items-center space-x-3'>
            
          <svg className='h-6 w-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM12 17V11M9 14H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
            <h3 className='text-slate-900 group-hover:text-white text-sm font-semibold'>New Project</h3>
          </div>
          <p className='text-slate-500 group-hover:text-white text-sm'>Create a new project from a variety of starting templates.</p>
        </a>

        {/* nested groups with unique group names */}
        <ul role='list' className='mx-auto'>
          {people.map((person) => {
            return (
              <li key={person.id} className='group/item hover:bg-slate-100 hover:text-slate-500 flex items-center p-2 rounded-lg space-x-3'>
                <Avatar src={person.imageUrl} alt="" className='max-w-xs object-scale-down w-24 h-24'/>
                <div className='px-4'>
                  <a href={person.url}>
                    <h1 className='text-left'>{person.name}</h1>
                  </a>
                  <p>{person.title}</p>
                </div>
                <a className='group/edit invisible hover:bg-slate-200 group-hover/item:visible' href={person.phone}>
                  <span className='group-hover/edit:text-gray-700 ml-auto'>call</span>
                </a>
              </li>
            )
          })}
        </ul>

        {/*  */}
        <fieldset>
          <legend>Published status</legend>

          <input id="draft" class="peer/draft" type="radio" name="status" checked />
          <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

          <input id="published" class="peer/published" type="radio" name="status" />
          <label for="published" class="peer-checked/published:text-sky-500">Published</label>

          <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
          <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
        </fieldset>

        <blockquote class="text-2xl font-semibold italic text-center text-slate-200">
          When you look
          <span class="relative">
            <span class="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
            <span class="relative text-white">annoyed</span>
          </span>
          all the time, people think that you're busy.
        </blockquote>

        {/* placeholder styles */}
        <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src={searchIcon} className='w-6 h-6'></img>
        </span>
        <input 
          class="text-slate-600 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm 
            focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
          placeholder="Search for anything..." 
          type="text" 
          name="search"
        />
        </label>

        {/* styling list markers */}
        <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
          <li>5 cups chopped Porcini mushrooms</li>
          <li>1/2 cup of olive oil</li>
          <li>3lb of celery</li>
        </ul>

        {/* selection modifier can also go in the body to apply to the whole site */}
        <div class="selection:bg-fuchsia-300 selection:text-fuchsia-900">
          <p>
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine intervention
            or the kinship of all living things but I tell you Jerry at that moment,
            I <em>was</em> a marine biologist.
          </p>
        </div>
        
        <p 
          class="first-line:uppercase first-line:tracking-widest
            first-letter:text-7xl first-letter:font-bold first-letter:text-white
            first-letter:mr-3 first-letter:float-left"
        >
            Well, let me tell you something, funny boy. Y'know that little stamp, the one
            that says "New York Public Library"? Well that may not mean anything to you,
            but that means a lot to me. One whole hell of a lot.
        </p>
        <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
            </span>
          </div>
          <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
  )
}

export default App
