# Components

- [Provider](#provider)
- [General Components](#general-components)
- [Layout](#layout)

## Provider
You need to wrap your entire code using Pur with this component. An alternative theme can be passed through its `theme` property.  

```jsx
<Provider>
  <Heading>Hello Pur</Heading>
</Provider>

// or
const alternativeTheme = {
  colors: {
    primary: 'yellow',
  },
};

<Provider theme={alternativeTheme}>
  <Heading primary>Hello Pur</Heading>
</Provider>
```

- **theme**, *Object*: alternative theme. Check `/src/theme.js` for more further details  

## General Components
### A
A simple hypertext.  

```jsx
<A href="https://twitter.com/eveningkid">My Twitter Account</A>
```  

- **underlined**: add `text-decoration: underline` to your link
- **noHover**: get rid of the `:hover` effect  

### Alert
Perfect for flash messages.  

```jsx
<Alert success>Maybe I should give this library a try.</Alert>
```

Compatible with every theme color (`primary`, `danger`, ...).  
Default style is applied if no color indication is given.  

### Badge
Show extra information using badges.  

```jsx
<Badge>New</Badge>
```

- **pill**: increase the badge's border radius

### Brand
Meant to be used inside a `NavBar`.

```jsx
<Brand>Pur</Brand>
```

### Breadcrumb
A simple breadcrumb component.

```jsx
<Breadcrumb>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem>News</BreadcrumbItem>
  <BreadcrumbItem active>National Day in San Francisco</BreadcrumbItem>
</Breadcrumb>
```

### BreadcrumbItem
Child for `Breadcrumb`.

```jsx
<BreadcrumbItem>Home</BreadcrumbItem>
```

- **active**: set a lighter text color

### Button
A `<button>` component.

```jsx
<Button small outline>Click Me</Button>
```

- **block**: make it 100% wide
- **disabled**: look unclickable
- **large**: bigger `padding`, bigger `font-size`
- **outline**: no background, only border
- **pill**: rounded button
- **small**: smaller `padding` and `font-size`

### ButtonGroup
A group of `Button`.

```jsx
<ButtonGroup>
  <Button>Add</Button>
  <Button danger>Delete</Button>
</ButtonGroup>
```

- **vertical**: horizontal direction by default. Make it vertical

### Card
A card component.

```jsx
<Card border fluid>
  <Cover
    height={100}
    backgroundImage="https://cdn-images-1.medium.com/max/800/1*DJI2eFn2rf-QO6fY8P20lg.jpeg"
  />

  <Row p={2} flexColumn>
    <Small muted>Science</Small>
    <Heading fontSize={18}>Reading the Headlines About Vegetarians and Depression is...</Heading>
  </Row>

  <Row px={2} pb={2} mtAuto>
    <UserCard>
      <Img src="https://cdn-images-1.medium.com/fit/c/80/80/1*f7WRZuUZO0AaV8pkP5C1Bw.jpeg" />
      <UserInfo fontSize={12} style={{lineHeight: '20px'}}>
        <A href="#" simple>Joel Kahn</A>
        <Small muted>Aug 14 · 4 min read</Small>
      </UserInfo>
    </UserCard>
  </Row>
</Card>
```

- **border**: add a light border
- **fluid**: influence its `height`. Will try to fit the entire available space
- **rounded**, *Number* (default to `4`, `4px`): set the card's `border-radius`
- **shadowed**: deeper look

### Code
A simple `code` wrapper. I don't even recommend you to use it. It simply bring some `padding` and a light-gray background. Up to you!

```jsx
<Code>console.log(64);</Code>
```

### Cover
Useful for `background-image`'d components. Set `cover` value for both `background-size` and `background-position`.  

```jsx
<Cover
  backgroundImage="image.png"
  height={250}
/>
```

### Fixed
Fixed container.

```jsx
<Fixed top left>Hi</Fixed>
```

- **bottom**: `bottom: 0`
- **left**: `left: 0`
- **right**: `right: 0`
- **top**: `top: 0`

### H1, H2, H3, H4, H5, H6
Simple wrappers for `h1`(28px)...`h6`(16px).

```jsx
<H1 primary>Lead Title</H1>
<H5>Subtitle</H5>
```

### Heading
More flexible header. Default to 28px. Simply use `fontSize` to adapt it to your needs.  

```jsx
<Heading>Lead Title</Heading>
```

### Img
`img` wrapper. You can check the code, there's like 4 lines.

```jsx
<Img src="image.png" />
```

### Input
A cool `input` for your forms.

```jsx
<Input type="text" placeholder="Username" pill />
```

- **disabled**: low opacity, make it look disabled
- **focused**: force `:focus` style
- **pill**: round input corners
- **small**: smaller `padding` and `font-size`

### InputGroup
Got that Airbnb input group date and place selector in mind? That's the idea. Bring `Input`s together.  

```jsx
<InputGroup shadowed>
  <Input type="text" placeholder="Anywhere" />
  <Input type="text" placeholder="Anytime" />
  <Input type="text" placeholder="1 guest" />
</InputGroup>
```

- **shadowed**: deeper look

### InputHelp
Extra indications for one specific field. Generate a `small`, `muted` element.  

```jsx
<InputHelp>Your password must only use the @ character.</InputHelp>
```

### Label
Input label.  

```jsx
// Advanced Usage
<Label uppercased invisible={!this.state.displayed}>Email address</Label>

<Input type="email" placeholder="Email address" onChange={(e) => {
  const displayed = (e.target.value.length > 0);
  this.setState({ displayed });
}} />
```

- **invisible**: show/hide the label (you should try this one with the usage example above, it's cool)
- **uppercased**: `text-transform: uppercase`, smaller `font-size`

### ListGroup
Could also be called `List` actually. Contains `ListItem`s.  

```jsx
<ListGroup hovered>
  <ListItem>Show All Results...</ListItem>
  <ListItem isHeader>Top Result</ListItem>
  <ListItem>
    <Img
      src="https://image.prntscr.com/image/G47leGx_QIeg_afAFnh9Gw.png"
      width={50}
      height={50}
      mr={1}
    />

    <Col>
      <P>Dunkirk: Original Mo...</P>
      <P muted>Album · Hans Zimmer</P>
    </Col>
  </ListItem>
</ListGroup>
```

- **hovered**: add `:hover` effect to `li` children when hovered

### ListItem
`ListGroup` child.

```jsx
<ListItem isHeader>Top Result</ListItem>
```

- **active**: darken item background
- **disabled**: disabled state
- **isHeader**: uppercased item, act as a separation mark between items

### NavBadge
Meant to be used along `NavItem`.  

```jsx
<NavItem>Trips <NavBadge /></NavItem>
```

### NavBar
Flex container, with vertically-aligned elements.

```jsx
<NavBar>
  <Brand>Pur</Brand>

  <Navigation>
    <NavItem active>Learn</NavItem>
    <NavItem cursor>Pricing</NavItem>
    <NavItem cursor>Team</NavItem>
  </Navigation>
</NavBar>
```

### Navigation
Could be compared to `nav` but way more customizable.

```jsx
// Itunes Style
<Navigation fluid underlined alignItemsBaseline>
  <H1>Browse</H1>
  <NavItem underlined active>New Music</NavItem>
  <NavItem>Playlists</NavItem>
  <NavItem>TV & Films</NavItem>
  <NavItem>Top Charts</NavItem>
  <NavItem>Genres</NavItem>
</Navigation>

<Navigation fluid justifyContentCenter>
  <NavItem>Library</NavItem>
  <NavItem>For You</NavItem>
  <NavItem filled active>Browse</NavItem>
  <NavItem>Radio</NavItem>
  <NavItem>Store</NavItem>
</Navigation>

<Navigation inverse w={300}>
  <NavItem active>All</NavItem>
  <NavItem>Pictures</NavItem>
  <NavItem>Videos</NavItem>
</Navigation>
```

- **inverse**: darker version (replacing white with gray background colors)
- **fluid**: set width to 100%
- **underlined** (can't be used along `inverse`): add a thin and light bottom border

### NavItem
`Navigation` child.

```jsx
<NavItem filled active>Browse</NavItem>
```

- **active**: active state, more colorful than other items
- **cursor**: `cursor: 'pointer'` and smaller `opacity`
- **filled**: fill the item with a strong background color, white text
- **underlined**: add a colored bottom border

### P
`p` wrapper, with no `margin` and `padding`.  

```jsx
<P>Hi</P>
```

### PageItem
Child for `Pagination`.

```jsx
<PageItem active>1</PageItem>
```

- **active**: apply primary color by default
- **disabled**: disabled state

### Pagination
Well, a pagination component. Inspired from Bootstrap.  

```jsx
<Pagination>
  <PageItem disabled>Previous</PageItem>
  <PageItem active>1</PageItem>
  <PageItem>2</PageItem>
  <PageItem>3</PageItem>
  <PageItem>Next</PageItem>
</Pagination>
```

### Progress
Container for `ProgressBar`.  

```jsx
<Progress h={2}>
  <ProgressBar w={'80%'} />
  <ProgressBar w={'10%'} bgSuccess />
</Progress>
```

### ProgressBar
A quite usual progress bar.  

```jsx
<ProgressBar w={'40%'} />

// Handle inside text as well
<ProgressBar w={'40%'}>40%</ProgressBar>
```

### Select
`select` tag wrapper.  

```jsx
<Select>
  <option value="student">Student</option>
  <option value="boss">Boss</option>
  <option value="waiter">Waiter</option>
</Select>
```

### Small
`small` wrapper. `font-size: 12px` by default.  

```jsx
<Small>You should never pour honey on cheese. Like never.</Small>
```

### Star
Star icon. Useful for ratings. "Empty"/gray-looking by default.  

```jsx
<Star checked />
<Star checked />
<Star half />
<Star />
<Star />
```

- **checked**: bring some color to your star
- **half**: only half a star for this one

### SubHeader
Another `h2` wrapper. `font-size: 18px`. Not sure why...  

```jsx
<SubHeader>This could literally be a subtitle</SubHeader>
```

### Submit
`<input type="submit" />` wrapper.  

```jsx
<Submit block value="Log In" />
```

- **block**: set width to `100%`
- **disabled**: disabled state for an `input`

### Text
`span` wrapper. Useful if you quickly need to apply theme colors to a text.  

```jsx
<Text danger>Beware!</Text>
```

### TextArea
`textare` wrapper.  

```jsx
<TextArea placeholder="How are you doing today?" />
```

### Truncate
A `span` that will truncate your text.  

```jsx
<Truncate>This one is way too long.</Truncate>
```

### UserCard
You'll probably often need this one. Display one user's informations easily. Should be combined with `UserInfo`.  

```jsx
<UserCard>
  <Img src="https://cdn-images-1.medium.com/fit/c/80/80/1*JPoVGs67gvsW-NH8GXdxHg.jpeg" />

  <UserInfo>
    <A href="#" simple>Arnaud</A>
  </UserInfo>
</UserCard>
```

### UserInfo
Must be used inside a `UserCard`.

```jsx
<UserInfo>
  <A href="#" simple>Arnaud</A>
  <Small muted>Aug 13 · 6 min read</Small>
</UserInfo>
```

*Note: you'll probably need to adapt its `line-height` property manually if you change its `font-size`.*

## Layout
Layout using Pur isn't such a big deal. [If you're used to Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/), you'll quickly get used to it.  

### Col
Grid column, must be inside a flex container (`Row` for example).  

```jsx
<Row>
  <Col>1</Col>
  <Col size={3}>2</Col>
  <Col>3</Col>
</Row>

/**
 * sm:
 *  1 | 2 | 3
 *
 * md:
 *   1
 * 2 | 3
 */
<Row>
  <Col size={4} md={12}>1</Col>
  <Col size={4} md={6}>2</Col>
  <Col size={4} md={6}>3</Col>
</Row>
```

- **size**, *Number*: size inside its current container, **out of 12, just like in Bootstrap**. It's considered as the default size if no other constraints are given with `sm`-`xl` properties
- **sm**, *Number*: `max-width: 540px`
- **md**, *Number*: `max-width: 720px`
- **lg**, *Number*: `max-width: 960px`
- **xl**, *Number*: `max-width: 1140px`  

*Note: if no value is given to `sm`-`xl` properties, Pur will assume you want to make it full width (=12, full line).*

### Container
A simple `div` container.

```jsx
<Container fluid>Hi</Container>
```

- **fluid**: make it full width (100%)
- **bordered**: add a thing light border

### ItemsRow
`Row`, but add some extra space between its elements.  

```jsx
<ItemsRow>
  <Col>1</Col>
  <Col>2</Col>
  <Col>3</Col>
</ItemsRow>
```

- **spaceBetween**, *String* (will probably become *Number* soon): specify how many pixels should be added between each item. Default to `15px`

### Line
A `div` with a `12px` bottom margin.  

```jsx
<Line>My content</Line>
```

### Row
A flex container.

```jsx
<Row>
  <Col>1</Col>
  <Col>2</Col>
  <Col>3</Col>
</Row>
```

- **fluid**: make it full width (100%)
