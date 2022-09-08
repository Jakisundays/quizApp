import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router'
import SelectField from '../Components/SelectField'
import TextFieldComp from '../Components/TextFieldComp'
import useAxios from '../hooks/useAxios'

const Settings = () => {

  const { response, error, loading } = useAxios({ url: '/api_category.php' })
  const history = useNavigate()

  if(loading){
    return(
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }

  if(error){
    return (
      <Typography variant='h6' mt={20} color='red'>
        Something went wrong!
      </Typography>
    )
  }

  const difficultyOptions = [
    { id: 'Easy', name: 'Easy' },
    { id: 'Medium', name: 'Medium' },
    { id: 'Hard', name: 'Hard' }
  ]

  const typeOptions = [
    { id: 'multiple', name: 'Multiple Choice' },
    { id: 'boolean', name: 'True/False' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    history('/questions')
  }

  return (
    <div>
      <Typography variant='h2'>Quiz App</Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label='Category' />
        <SelectField options={difficultyOptions} label='Difficulty' />
        <SelectField options={typeOptions} label='Type' />
        <TextFieldComp />
        <Box mt={3} width='50%' >
          <Button fullWidth variant='contained' type='submit' >
            Get Started
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default Settings
