
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../public/269755769_10166071563130217_4217701679363898637_n.jpg'

function GitHubCard() {
  return (
    // basic card from react-bootstrap
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../public/269755769_10166071563130217_4217701679363898637_n.jpg" />
      <Card.Body>
        <Card.Title>Vanessa Pursley</Card.Title>
        <Card.Text>
          Learning Software development via NC State's continuing education departement. Ideal position will be a developer of educational technology for use in public schools. 
        </Card.Text>
        <Button variant="link" href="https://github.com/vmlayton87">My student GitHub Link</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard