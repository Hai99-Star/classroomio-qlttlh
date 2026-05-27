var k=e=>{throw TypeError(e)};var A=(e,o,t)=>o.has(e)||k("Cannot "+t);var i=(e,o,t)=>(A(e,o,"read from private field"),t?t.call(e):o.get(e)),r=(e,o,t)=>o.has(e)?k("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,t);import{s as g,g as d,a as y,A as f}from"./DMkybXYI.js";import{c as n}from"./DGAl-O-i.js";import{s as S}from"./C_RNpsE7.js";import{B as C}from"./BgSWffro.js";function h(e){return e??"<paste-your-mcp-key>"}function $(e){return`claude mcp add-json classroomio '{
  "command": "npx",
  "args": ["-y", "@classroomio/mcp"],
  "env": {
    "CLASSROOMIO_API_URL": "https://api.classroomio.com",
    "CLASSROOMIO_API_KEY": "${h(e)}"
  }
}'`}function M(e){return`codex mcp add classroomio \\
  --env CLASSROOMIO_API_URL=https://api.classroomio.com \\
  --env CLASSROOMIO_API_KEY=${h(e)} \\
  -- npx -y @classroomio/mcp`}function P(e){return`{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "classroomio": {
      "type": "local",
      "command": ["npx", "-y", "@classroomio/mcp"],
      "enabled": true,
      "environment": {
        "CLASSROOMIO_API_URL": "https://api.classroomio.com",
        "CLASSROOMIO_API_KEY": "${h(e)}"
      }
    }
  }
}`}function F(e){return`{
  "mcpServers": {
    "classroomio": {
      "command": "npx",
      "args": ["-y", "@classroomio/mcp"],
      "env": {
        "CLASSROOMIO_API_URL": "https://api.classroomio.com",
        "CLASSROOMIO_API_KEY": "${h(e)}"
      }
    }
  }
}`}function I(e){switch(e){case"mcp":return"ClassroomIO MCP";case"api":return"ClassroomIO API";case"zapier":return"ClassroomIO Zapier"}}function q(e){return`${e}...`}var c,u,m,p;class K extends C{constructor(){super(...arguments);r(this,c,g(null));r(this,u,g(!1));r(this,m,g(f([])));r(this,p,g(null))}get generatedSecret(){return d(i(this,c))}set generatedSecret(t){y(i(this,c),t,!0)}get isFetched(){return d(i(this,u))}set isFetched(t){y(i(this,u),t,!0)}get keys(){return d(i(this,m))}set keys(t){y(i(this,m),t,!0)}get usage(){return d(i(this,p))}set usage(t){y(i(this,p),t,!0)}async listKeys(t){return this.execute({requestFn:()=>n.organization.automation.keys.$get({query:t?{type:t}:{}}),logContext:"fetching automation keys",onSuccess:s=>{this.keys=s.data,this.isFetched=!0}})}async getUsage(t="mcp"){return this.execute({requestFn:()=>n.organization.automation.usage.$get({query:{type:t}}),logContext:"fetching automation usage",onSuccess:s=>{this.usage=s.data}})}async createKey(t,s){return this.execute({requestFn:()=>n.organization.automation.keys.$post({json:{type:t,label:(s==null?void 0:s.trim())||I(t)}}),logContext:"creating automation key",onSuccess:a=>{this.generatedSecret=a.data.secret,this.keys=[a.data.key,...this.keys],this.usage&&(this.usage={...this.usage,activeKeys:this.usage.activeKeys+1}),S.success("snackbar.automation.created")},onError:a=>{typeof a!="string"&&(this.handleValidationError(a),"field"in a&&a.field&&(this.errors[a.field]=a.error))}})}async revokeKey(t){return this.execute({requestFn:()=>n.organization.automation.keys[":keyId"].$delete({param:{keyId:t}}),logContext:"revoking automation key",onSuccess:s=>{if(this.keys=this.keys.map(a=>a.id===s.data.id?s.data:a),this.usage){const a=s.data.type,O=this.keys.filter(l=>l.type===a&&!l.revokedAt).length;this.usage={...this.usage,activeKeys:O}}S.success("snackbar.automation.revoked")}})}async rotateKey(t){return this.execute({requestFn:()=>n.organization.automation.keys[":keyId"].rotate.$post({param:{keyId:t}}),logContext:"rotating automation key",onSuccess:s=>{this.generatedSecret=s.data.secret,this.keys=this.keys.map(a=>a.id===s.data.key.id?s.data.key:a),S.success("snackbar.automation.rotated")}})}clearGeneratedSecret(){this.generatedSecret=null}}c=new WeakMap,u=new WeakMap,m=new WeakMap,p=new WeakMap;const E=new K;export{E as a,$ as b,M as c,F as d,P as e,q as g};
