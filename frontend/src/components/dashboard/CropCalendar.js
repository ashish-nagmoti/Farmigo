import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Button,
  Avatar,
  AvatarGroup,
  Badge,
} from '@mui/material';
import {
  Today as TodayIcon,
  CalendarMonth as CalendarMonthIcon,
  CalendarToday as CalendarTodayIcon,
  CheckCircle as CheckCircleIcon,
  MoreHoriz as MoreHorizIcon,
} from '@mui/icons-material';

const CropCalendar = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  
  const upcomingActivities = [
    {
      id: 1,
      activity: 'Apple Harvesting',
      startDate: 'Oct 15',
      endDate: 'Oct 30',
      status: 'in-progress',
      priority: 'high',
      assignees: 4,
    },
    {
      id: 2,
      activity: 'Pesticide Application',
      startDate: 'Oct 20',
      endDate: 'Oct 21',
      status: 'upcoming',
      priority: 'medium',
      assignees: 2,
    },
    {
      id: 3,
      activity: 'Irrigation Schedule',
      startDate: 'Oct 25',
      endDate: 'Oct 26',
      status: 'upcoming',
      priority: 'medium',
      assignees: 1,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success.main';
      case 'in-progress':
        return 'warning.main';
      case 'upcoming':
        return 'info.main';
      default:
        return 'grey.500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'error.main';
      case 'medium':
        return 'warning.main';
      case 'low':
        return 'success.main';
      default:
        return 'grey.500';
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title="Crop Calendar"
        subheader={`${currentMonth} Activities`}
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <CalendarMonthIcon />
          </Avatar>
        }
        action={
          <Button size="small" startIcon={<TodayIcon />} sx={{ textTransform: 'none' }}>
            View Full Calendar
          </Button>
        }
      />
      <Divider />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          {upcomingActivities.map((activity) => (
            <Box
              key={activity.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 1.5,
                mb: 1.5,
                borderRadius: 1,
                bgcolor: 'background.default',
                border: 1,
                borderColor: 'divider',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: getStatusColor(activity.status),
                    mr: 1.5,
                  }}
                />
                <Box>
                  <Typography variant="subtitle2">{activity.activity}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarTodayIcon
                      sx={{ fontSize: 14, mr: 0.5, color: 'text.secondary' }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {activity.startDate} - {activity.endDate}
                    </Typography>
                    <Box
                      sx={{
                        ml: 1,
                        px: 1,
                        py: 0.25,
                        borderRadius: 4,
                        bgcolor: `${getPriorityColor(activity.priority)}15`,
                        color: getPriorityColor(activity.priority),
                        fontSize: '0.6rem',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                      }}
                    >
                      {activity.priority}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 24, height: 24 } }}>
                {[...Array(activity.assignees)].map((_, index) => (
                  <Avatar
                    key={index}
                    alt={`Worker ${index + 1}`}
                    src={`/static/images/avatar/${index + 1}.jpg`}
                    sx={{ width: 24, height: 24 }}
                  />
                ))}
              </AvatarGroup>
            </Box>
          ))}
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle2">Season Progress</Typography>
          <Typography variant="caption" color="text.secondary">
            65% Complete
          </Typography>
        </Box>
        
        <Box
          sx={{
            position: 'relative',
            mt: 1,
            height: 8,
            borderRadius: 4,
            bgcolor: 'background.default',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '65%',
              borderRadius: 4,
              bgcolor: 'success.main',
            }}
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          The apple harvest season is in progress. Make sure to prioritize Royal Gala and Red Delicious 
          varieties which are at optimal ripeness now. Schedule irrigation for next week's plantings.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CropCalendar;
