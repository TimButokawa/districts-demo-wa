import React, {Component} from 'react';
import Layout from 'material-ui/Layout';
import {
  Card,
  CardMedia,
  CardContent,
  CardHeader
} from 'material-ui/Card';
import Text from 'material-ui/Text';
import CloseIcon from 'material-ui-icons/Close';

class Districts extends Component {
  render() {
    return (
      <Layout container gutter={16}>
        <Layout item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              avatar={<CloseIcon/>}
              title="Placeholder"
              />
            <CardMedia>
              <img src="https://unsplash.it/720/200"/>
            </CardMedia>
            <CardContent>
              <Text type="headline" component="h2">Title</Text>
              <Text component="p">
                Placeholder text.
              </Text>
            </CardContent>
          </Card>
        </Layout>
        <Layout item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              avatar={<CloseIcon/>}
              title="Placeholder"
              />
            <CardMedia>
              <img src="https://unsplash.it/720/200"/>
            </CardMedia>
            <CardContent>
              <Text type="headline" component="h2">Title</Text>
              <Text component="p">
                Placeholder text.
              </Text>
            </CardContent>
          </Card>
        </Layout>
        <Layout item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              avatar={<CloseIcon/>}
              title="Placeholder"
              />
            <CardMedia>
              <img src="https://unsplash.it/720/200"/>
            </CardMedia>
            <CardContent>
              <Text type="headline" component="h2">Title</Text>
              <Text component="p">
                Placeholder text.
              </Text>
            </CardContent>
          </Card>
        </Layout>
        <Layout item xs={12} sm={6} md={3}>
          <Card>
            <CardHeader
              avatar={<CloseIcon/>}
              title="Placeholder"
              />
            <CardMedia>
              <img src="https://unsplash.it/720/200"/>
            </CardMedia>
            <CardContent>
              <Text type="headline" component="h2">Title</Text>
              <Text component="p">
                Placeholder text.
              </Text>
            </CardContent>
          </Card>
        </Layout>
      </Layout>
    );
  }
}

export default Districts;
