webpackJsonp([0x660ac77b9cf5],{389:function(n,a){n.exports={data:{post:{html:'<h1 id="configuration"><a href="#configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration</h1>\n<p>Here\'s the complete configuration of the Symfony bundle with including default values:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/config.yml</span>\n<span class="token key atrule">api_platform</span><span class="token punctuation">:</span>\n\n    <span class="token comment"># The title of the API.</span>\n    <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n    <span class="token comment"># The description of the API.</span>\n    <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n    <span class="token comment"># The version of the API.</span>\n    <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">\'0.0.0\'</span>\n\n    <span class="token comment"># Specify a name converter to use.</span>\n    <span class="token key atrule">name_converter</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n    <span class="token comment"># Specify a path name generator to use.</span>\n    <span class="token key atrule">path_segment_name_generator</span><span class="token punctuation">:</span> <span class="token string">\'api_platform.path_segment_name_generator.underscore\'</span>\n\n    <span class="token key atrule">eager_loading</span><span class="token punctuation">:</span>\n        <span class="token comment"># To enable or disable eager loading.</span>\n        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n        <span class="token comment"># Fetch only partial data according to serialization groups.</span>\n        <span class="token comment"># If enabled, Doctrine ORM entities will not work as expected if any of the other fields are used.</span>\n        <span class="token key atrule">fetch_partial</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n        <span class="token comment"># Max number of joined relations before EagerLoading throws a RuntimeException.</span>\n        <span class="token key atrule">max_joins</span><span class="token punctuation">:</span> <span class="token number">30</span>\n\n        <span class="token comment"># Force join on every relation.</span>\n        <span class="token comment"># If disabled, it will only join relations having the EAGER fetch mode.</span>\n        <span class="token key atrule">force_eager</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token comment"># Enable the FOSUserBundle integration.</span>\n    <span class="token key atrule">enable_fos_user</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n    <span class="token comment"># Enable the Nelmio Api doc integration.</span>\n    <span class="token key atrule">enable_nelmio_api_doc</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n    <span class="token comment"># Enable the Swagger documentation and export.</span>\n    <span class="token key atrule">enable_swagger</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token comment"># Enable Swagger ui.</span>\n    <span class="token key atrule">enable_swagger_ui</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n    <span class="token key atrule">oauth</span><span class="token punctuation">:</span>\n        <span class="token comment"># To enable or disable oauth.</span>\n        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n        <span class="token comment"># The oauth client id.</span>\n        <span class="token key atrule">clientId</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n        <span class="token comment"># The oauth client secret.</span>\n        <span class="token key atrule">clientSecret</span><span class="token punctuation">:</span> <span class="token string">\'\'</span>\n\n        <span class="token comment"># The oauth type.</span>\n        <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">\'oauth2\'</span>\n\n        <span class="token comment"># The oauth flow grant type.</span>\n        <span class="token key atrule">flow</span><span class="token punctuation">:</span> <span class="token string">\'application\'</span>\n\n        <span class="token comment"># The oauth token url.</span>\n        <span class="token key atrule">tokenUrl</span><span class="token punctuation">:</span> <span class="token string">\'/oauth/v2/token\'</span>\n\n        <span class="token comment"># The oauth authentication url.</span>\n        <span class="token key atrule">authorizationUrl</span><span class="token punctuation">:</span> <span class="token string">\'/oauth/v2/auth\'</span>\n\n        <span class="token comment"># The oauth scopes.</span>\n        <span class="token key atrule">scopes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token key atrule">swagger</span><span class="token punctuation">:</span>\n        <span class="token comment"># The swagger api keys.</span>\n        <span class="token key atrule">api_keys</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token key atrule">collection</span><span class="token punctuation">:</span>\n        <span class="token comment"># The default order of results.</span>\n        <span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token string">\'ASC\'</span>\n\n        <span class="token comment"># The name of the query parameter to order results.</span>\n        <span class="token key atrule">order_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'order\'</span>\n\n        <span class="token key atrule">pagination</span><span class="token punctuation">:</span>\n            <span class="token comment"># To enable or disable pagination for all resource collections by default.</span>\n            <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n            <span class="token comment"># To allow the client to enable or disable the pagination.</span>\n            <span class="token key atrule">client_enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n            <span class="token comment"># To allow the client to set the number of items per page.</span>\n            <span class="token key atrule">client_items_per_page</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n            <span class="token comment"># The default number of items per page.</span>\n            <span class="token key atrule">items_per_page</span><span class="token punctuation">:</span> <span class="token number">30</span>\n\n            <span class="token comment"># The maximum number of items per page.</span>\n            <span class="token key atrule">maximum_items_per_page</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n            <span class="token comment"># The default name of the parameter handling the page number.</span>\n            <span class="token key atrule">page_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'page\'</span>\n\n            <span class="token comment"># The name of the query parameter to enable or disable pagination.</span>\n            <span class="token key atrule">enabled_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'pagination\'</span>\n\n            <span class="token comment"># The name of the query parameter to set the number of items per page.</span>\n            <span class="token key atrule">items_per_page_parameter_name</span><span class="token punctuation">:</span> <span class="token string">\'itemsPerPage\'</span>\n\n    <span class="token key atrule">mapping</span><span class="token punctuation">:</span>\n        <span class="token comment"># The list of paths with files or directories where the bundle will look for additional resource files.</span>\n        <span class="token key atrule">paths</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token comment"># The list of your resources class directories. Defaults to the directories of the mapping paths but might differ.</span>\n    <span class="token key atrule">resource_class_directories</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token string">\'%kernel.project_dir%/src/Entity\'</span>\n\n    <span class="token key atrule">http_cache</span><span class="token punctuation">:</span>\n        <span class="token comment"># Automatically generate etags for API responses.</span>\n        <span class="token key atrule">etag</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n        <span class="token comment"># Default value for the response max age.</span>\n        <span class="token key atrule">max_age</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n        <span class="token comment"># Default value for the response shared (proxy) max age.</span>\n        <span class="token key atrule">shared_max_age</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n        <span class="token comment"># Default values of the "Vary" HTTP header.</span>\n        <span class="token key atrule">vary</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'Accept\'</span><span class="token punctuation">]</span>\n\n        <span class="token comment"># To make all responses public by default.</span>\n        <span class="token key atrule">public</span><span class="token punctuation">:</span> <span class="token null important">~</span>\n\n        <span class="token key atrule">invalidation</span><span class="token punctuation">:</span>\n          <span class="token comment"># To enable the tags-based cache invalidation system.</span>\n          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n\n          <span class="token comment"># URLs of the Varnish servers to purge using cache tags when a resource is updated.</span>\n          <span class="token key atrule">varnish_urls</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n    <span class="token comment"># The list of exceptions mapped to their HTTP status code.</span>\n    <span class="token key atrule">exception_to_status</span><span class="token punctuation">:</span>\n        <span class="token comment"># With a status code.</span>\n        <span class="token key atrule">Symfony\\Component\\Serializer\\Exception\\ExceptionInterface</span><span class="token punctuation">:</span> <span class="token number">400</span>\n\n        <span class="token comment"># Or with a constant defined in the \'Symfony\\Component\\HttpFoundation\\Response\' class.</span>\n        <span class="token key atrule">ApiPlatform\\Core\\Exception\\InvalidArgumentException</span><span class="token punctuation">:</span> <span class="token tag">!php/const:Symfony\\Component\\HttpFoundation\\Response::HTTP_BAD_REQUEST</span>\n\n        <span class="token comment"># ...</span>\n\n    <span class="token comment"># The list of enabled formats. The first one will be the default.</span>\n    <span class="token key atrule">formats</span><span class="token punctuation">:</span>\n        <span class="token key atrule">jsonld</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/ld+json\'</span><span class="token punctuation">]</span>\n\n        <span class="token key atrule">json</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/json\'</span><span class="token punctuation">]</span>\n\n        <span class="token key atrule">html</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'text/html\'</span><span class="token punctuation">]</span>\n\n        <span class="token comment"># ...</span>\n\n    <span class="token comment"># The list of enabled error formats. The first one will be the default.</span>\n    <span class="token key atrule">error_formats</span><span class="token punctuation">:</span>\n        <span class="token key atrule">jsonproblem</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/problem+json\'</span><span class="token punctuation">]</span>\n\n        <span class="token key atrule">jsonld</span><span class="token punctuation">:</span>\n            <span class="token key atrule">mime_types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'application/ld+json\'</span><span class="token punctuation">]</span>\n\n        <span class="token comment"># ...</span>\n</code></pre>\n      </div>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"embedding-relations",title:"Using Different Serialization Groups per Operation"},{id:"embedding-relations",title:"Embedding Relations"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"name-conversion",title:"Name Conversion"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"writable-entity-identifier",title:"Writable Entity Identifier"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"}]},{id:"events",title:"The Event System",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"creating-a-custom-data-provider",title:"Custom Collection Data Provider"},{id:"returning-a-paged-collection",title:"Custom Item Data Provider"}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"jwt",title:"JWT Authentification",anchors:[{id:"installing-lexikjwtauthenticationnundle",title:"Installing LexikJWTAuthenticationBundle"},{id:"documenting-the-authentication-mechanism-with-swagger-open-api",title:"Documenting the Authentication Mechanism with Swagger/Open API"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"security",title:"Security",anchors:null},{id:"swagger",title:"Swagger Support",anchors:[{id:"overriding-the-swagger-documentation",title:"Overriding the Swagger documentation"},{id:"using-the-swagger-context",title:"Using the Swagger Context"}]},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Builtin HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:'Accept "application/x-www-form-urlencoded" Form Data',anchors:null},{id:"external-vocabularies",title:"Using External Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending the JSON-LD context",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null},{id:"docker",title:"Using API Platform with Docker",anchors:[{id:"services",title:"Services"},{id:"installation",title:"Installation"}]}]}},{node:{title:"Extra",path:"extra",items:[{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/configuration",current:{path:"docs/core/configuration",title:"The API Component - Configuration"},prev:{path:"docs/core/getting-started",title:"Getting Started",rootPath:"The API Component"},next:{path:"docs/core/operations",title:"Operations",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-configuration-d10c70d3d7c79b0b2bc3.js.map