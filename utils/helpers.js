module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    },
    format_url: url => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
    truncate: (str, len) => {

      if (!str) {
          return '';
      }

      if (str.length > len && str.length > 0) {
          var new_str = str + " ";
          new_str = str.substr(0, len);
          new_str = str.substr(0, new_str.lastIndexOf(" "));
          new_str = (new_str.length > 0) ? new_str : str.substr(0, len);
          return new_str +'...'; 
      }
      return str;
  }
}
