import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { 
  CheckCircle as CheckCircleIcon,
  FiberManualRecord as FiberManualRecordIcon,
} from '@mui/icons-material';

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      activity: 'Shipped 200kg of Apples to Delhi',
      timestamp: '2 hours ago',
      completed: true,
    },
    {
      id: 2,
      activity: 'Applied organic pesticides to tomato field',
      timestamp: '9 hours ago',
      completed: true,
    },
    {
      id: 3,
      activity: 'Updated inventory counts for all produce',
      timestamp: 'Yesterday',
      completed: true,
    },
    {
      id: 4,
      activity: 'Received payment for Golden Delicious apples',
      timestamp: '2 days ago',
      completed: true,
    },
    {
      id: 5,
      activity: 'Scheduled irrigation for cucumber field',
      timestamp: '3 days ago',
      completed: false,
    },
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Activities
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        <List sx={{ p: 0 }}>
          {activities.map((activity) => (
            <React.Fragment key={activity.id}>
              <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {activity.completed ? (
                    <CheckCircleIcon color="success" fontSize="small" />
                  ) : (
                    <FiberManualRecordIcon color="info" fontSize="small" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={activity.activity}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {activity.timestamp}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {activity.id !== activities.length && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
