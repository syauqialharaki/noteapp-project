import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getNote, deleteNote } from "../utils/local-data";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function DetailWrapper() {
  const { id } = useParams();
  return <Detail id={id} onDelete={deleteNote} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }

  render() {
    if (this.state.notes === null) {
      return <p>Tidak ada catatan</p>;
    } else {
      return (
        <section>
          <NoteDetail {...this.state.notes} onDelete={this.props.onDelete} />
        </section>
      );
    }
  }
}

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailWrapper;
