// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text,
  CodePane,
  Layout,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  html: require("../assets/html-5.svg"),
  css: require("../assets/css-3.svg"),
  js: require("../assets/javascript.svg"),
  me: require("../assets/me.jpg"),
  code: require("../assets/code.png"),
  sass: require("../assets/sass.svg"),
  react: require("../assets/react.svg"),
  vue: require("../assets/vue.svg"),
  angular: require("../assets/angular.svg"),
  bower: require("../assets/bower.svg"),
  gulp: require("../assets/gulp.svg"),
  grunt: require("../assets/grunt.svg"),
  npm: require("../assets/npm.svg"),
  yarn: require("../assets/yarn.svg"),
  babel: require("../assets/babel.svg"),
  webpack: require("../assets/webpack.svg"),
  less: require("../assets/less.svg"),
  rollup: require("../assets/rollup.jpg"),
  github: require("../assets/github.svg"),
  twitter: require("../assets/twitter.svg")
};

const gifs = {
  meaning: require("../assets/meaning.gif"),
  no: require("../assets/no.gif"),
  html: require("../assets/html.gif"),
  css: require("../assets/css.gif"),
  js: require("../assets/js.gif"),
  mobile: require("../assets/mobile.gif"),
  tools: require("../assets/tools.gif"),
  ux: require("../assets/ux.gif"),
  approves: require("../assets/approves.gif"),
  lessIsMore: require("../assets/lessismore.gif"),
  error: require("../assets/error.gif"),
  community: require("../assets/community.gif")
}

const codes = {
  mediaQueries: require("raw-loader!../codes/media-queries.example"),
  classId: require("raw-loader!../codes/class-id.example"),
  divSpan: require("raw-loader!../codes/div-span.example"),
  dataHtml: require("raw-loader!../codes/data-attr-html.example"),
  dataJs: require("raw-loader!../codes/data-attr-js.example"),
  html: require("raw-loader!../codes/html.example"),
  css: require("raw-loader!../codes/css.example")
}

preloader(images);
preloader(gifs);

const theme = createTheme({
  primary: "white",
  secondary: "#4c4c4c",
  tertiary: "#03A9FC",
  quartenary: "#969696"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const styles = {
  frontendImgs: {
    marginLeft: '30px',
    marginRight: '30px',
    marginBottom: '10px',
    width: '250px',
    height: '250px'
  },
  aboutImgs: {
    height: '200px'
  },
  headImgs: {
    height: '300px',
    marginTop: '20px'
  },
  marginTop: {
    marginTop: '40px'
  },
  contactInfo: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30
  },
  contact: {
    flex: 1,
    textAlign: 'left',
    marginTop: 30
  },
  contactImg: {
    height: 40,
    margin: 0,
    marginRight: 15
  },
  contactItem: {
    margin: 0,
    fontSize: 30
  },
  codeLogo: {
    height: 250
  },
  community: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'left',
  },
  communityItem: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20
  },
  communityTitle: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    color: '#fff'
  },
  flex: {
    flex: 1
  },
  flexItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            The meaning of life
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            front-end
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            user experience
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            and everything
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary">
            felipe soares
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.me} width={280} height={280}></Image>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Felipe Luiz Soares
          </Heading>
          <Layout style={styles.contactInfo}>
            <Image src={images.github} style={styles.contactImg}></Image>
            <Text style={styles.contactItem}> github.com/felipesoares6</Text>
          </Layout>
          <Layout style={styles.contactInfo}>
            <Image src={images.twitter} style={styles.contactImg}></Image>
            <Text style={styles.contactItem}> @felipesoares6_</Text>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.code} style={styles.codeLogo}></Image>
          <Heading size={5}> we are hiring </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={gifs.meaning} width={800} height={500}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="
          <p>pq aprender front-end</p>
          <p>nao ter front end na faculdade</p>
          <p>uma area enorme de tecnologia</p>
          <p>cada vez mais procura e importância</p>">
          <Heading size={4} textColor="primary">front-end</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="
          <p>pq aprender experiência do usuário</p>
          <p>entender quem usa os produtos</p>
          <p>procurar anteder da melhor forma possivel nosso cliente/usuario</p>">
          <Heading size={4} textColor="primary">user experience</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={images.html} style={styles.frontendImgs}></Image>
          <Image src={images.css} style={styles.frontendImgs}></Image>
          <Image src={images.js} style={styles.frontendImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Image src={gifs.no} width={800} height={500}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" notes="
          <p>criado em 1991</p>
          <p>html 5 2008</p>">
          <Heading size={2} textColor="#e34c26">HTML</Heading>
          <Image src={gifs.html} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" notes="
          <p>navegacao entre paginas através de links</p>
          <p>contar a história da ancora, navegadores</p>">
          <Heading size={4} textColor="primary">hypertext</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">markup</Heading>
          <CodePane style={styles.marginTop} textSize="22px"
            lang="html" source={codes.html}>
          </CodePane>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">semantic</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary">CSS</Heading>
          <Image src={gifs.css} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">cascading style</Heading>
          <CodePane style={styles.marginTop} textSize="22px"
            lang="css" source={codes.css}>
          </CodePane>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">prefer classes over id's</Heading>
          <CodePane style={styles.marginTop} textSize="26px" lang="css" source={codes.classId}>
          </CodePane>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> style guides</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> CSS preprocessors</Heading>
          <Image src={images.sass} style={ styles.frontendImgs }></Image>
          <Image src={images.less} style={ styles.frontendImgs }></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> you might not need js</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="#fff90d">JS</Heading>
          <Image src={gifs.js} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> the universal web language</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> es6 </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> use data-attributes </Heading>
          <CodePane style={styles.marginTop} textSize="22px"
            lang="html" source={codes.dataHtml}>
          </CodePane>
          <CodePane style={styles.marginTop} textSize="22px"
            lang="js" source={codes.dataJs}>
          </CodePane>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> jquery </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> you might not need jquery too </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary"> frameworks </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
          notes="<p>vale a pena?</p>
          <p>qual o tamanho da aplicação?</p>
          <p>como isso vai impactar a performance?</p>
          <p>view react angular ember inferno</p>">
          <Layout style={styles.flex}>
            <Layout style={styles.flexItem}>
              <Image src={images.vue} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                vue
              </Text>
            </Layout>
            <Layout style={styles.flexItem}>
              <Image src={images.react} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                react
              </Text>
            </Layout>
            <Layout style={styles.flexItem}>
              <Image src={images.angular} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                angular
              </Text>
            </Layout>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary">tools</Heading>
          <Image src={gifs.tools} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
          notes="<p>package manager</p>">
          <Layout style={styles.flex}>
            <Layout style={styles.flexItem}>
              <Image src={images.npm} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                npm
              </Text>
            </Layout>
            <Layout style={styles.flexItem}>
              <Image src={images.yarn} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                yarn
              </Text>
            </Layout>
            <Layout style={styles.flexItem}>
              <Image src={images.bower} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                bower
              </Text>
            </Layout>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
          notes="<p>task manager</p>">
          <Layout style={styles.flex}>
            <Layout style={styles.flexItem}>
                <Image src={images.gulp} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                gulp
              </Text>
            </Layout>
            <Layout style={styles.flexItem}>
              <Image src={images.grunt} style={styles.frontendImgs}></Image>
              <Text textColor="tertiary">
                grunt
              </Text>
            </Layout>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
          notes="<p>bundler</p>
                <p>webpack</p>
                <p>rollup</p>">
            <Layout style={styles.flex}>
              <Layout style={styles.flexItem}>
                <Image src={images.webpack} style={styles.frontendImgs}></Image>
                <Text textColor="tertiary">
                  webpack
                </Text>
              </Layout>
              <Layout style={styles.flexItem}>
                <Image src={images.rollup} style={styles.frontendImgs}></Image>
                <Text textColor="tertiary">
                  rollup
                </Text>
              </Layout>
            </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary"
          notes="<p>transpiler</p>">
          <Image src={images.babel} style={styles.frontendImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="tertiary">web mobile</Heading>
          <Image src={gifs.mobile} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">viewport</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">web responsive</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">mobile first</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">media queries</Heading>
          <CodePane style={styles.marginTop} textSize="26px" lang="css" source={codes.mediaQueries}>
          </CodePane>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary"
          notes="<p>ux fora de ti</p>
                <p>front end e usabilidade</p>
                <p>velocidade da aplicação link com html, js, frameworks</p>">
          <Heading size={4} textColor="primary">user experience</Heading>
          <Image src={gifs.ux} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary"
          notes="<p>Jabok Nielsen</p>
          <p>são 10</p>">
          <Heading size={4} textColor="primary">heuristics for user interface</Heading>
          <Image src={gifs.approves} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary"
          notes="<p>mantenha o usuário informado sobre o que esta acontecendo no sistema</p>
          <p>exemplo da foto upload</p>">
          <Heading size={4} textColor="primary">visibility of system status</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary"
          note="fale a linguagem do usuário">
          <Heading size={4} textColor="primary">match between system and the real world</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary"
          notes="permita uma saída de emergência">
          <Heading size={4} textColor="primary">user control and freedom</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary"
          notes="use padrões para não confudir o usuário">
          <Heading size={4} textColor="primary">consistency and standards</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary"
          notes="previna erros ao invés de boas mensagens de erro">
          <Heading size={4} textColor="primary">error prevention</Heading>
          <Image src={gifs.error} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">aesthetic and minimalist design</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">less is more</Heading>
          <Image src={gifs.lessIsMore} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]}
          notes="<p>brad fros</p>
          <p>o que importa é a INTERFACE e a experiência que o usuário vai ter</p>">
          <BlockQuote>
            <Quote textSize="56px" textColor="quartenary">
              Users don’t care if React is powering this feature while Angular is powering another.
              Users don’t care that one page was served up by WordPress,
              and another page was served up by Drupal. A UI is a UI.
            </Quote>
            <Cite textColor="secondary" textFont="secondary">Brad Frost</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">communities</Heading>
          <Image src={gifs.community} style={styles.headImgs}></Image>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Layout style={styles.community}>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>sorocaba css</Text>
              <Link style={styles.communityItem}>www.meetup.com/pt-BR/SorocabaCSS/</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>guru sorocaba</Text>
              <Link style={styles.communityItem}>www.meetup.com/pt-BR/GURU-Sorocaba/</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>python sorocaba</Text>
              <Link style={styles.communityItem}>www.meetup.com/pt-BR/Grupy-SP/</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>integrado</Text>
              <Link style={styles.communityItem}>www.meetup.com/pt-BR/In-Tegra-Do/</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>semana da tecnologia fatec</Text>
              <Link style={styles.communityItem}>fatecsorocaba.github.io/semana-da-tecnologia/</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>rails girls</Text>
              <Link style={styles.communityItem}>www.facebook.com/railsgirlssorocaba/?fref=ts</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>node sorocaba</Text>
              <Link style={styles.communityItem}>www.meetup.com/pt-BR/Sorocaba-Node-User-Group-SNUG/</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>english meetup</Text>
              <Link style={styles.communityItem}>www.meetup.com/pt-BR/Sorocaba-English-Conversation-Happy-Hours/</Link>
            </Layout>
            <Layout style={styles.contact}>
              <Text style={styles.communityTitle}>gdg sorocaba</Text>
              <Link style={styles.communityItem}>www.meetup.com/pt-BR/GDG-Sorocaba/</Link>
            </Layout>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary">thanks</Heading>
        </Slide>
      </Deck>
    );
  }
}
